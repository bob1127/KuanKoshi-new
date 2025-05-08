import mailchimp from "@mailchimp/mailchimp_marketing";
import md5 from "crypto-js/md5"; // 安裝：npm install crypto-js

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      email,
      name,
      phone,
      spaceType,
      spaceSize,
      city,
      district,
      description,
    } = body;

    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ message: "Email 格式錯誤，請重新輸入" }), {
        status: 400,
      });
    }

    // Mailchimp 需要 md5(email) 作為識別 ID
    const subscriberHash = md5(email.toLowerCase()).toString();

    const response = await mailchimp.lists.setListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      subscriberHash,
      {
        email_address: email,
        status_if_new: "subscribed", // 如果還沒在名單裡，會自動加入
        merge_fields: {
          FNAME: name,
          PHONE: phone,
          CITY: city,
          DISTRICT: district,
          SPACE: spaceType,
          SIZE: spaceSize,
          DESC: description,
        },
      }
    );

    return new Response(JSON.stringify({ message: "Success", data: response }), {
      status: 200,
    });
  } catch (error) {
    const raw = error?.response?.body?.detail || error.message;
    let localized = "發生未知錯誤，請稍後再試";

    if (raw.includes("looks fake or invalid")) {
      localized = "請輸入有效的 Email 地址";
    }

    return new Response(
      JSON.stringify({
        message: "錯誤",
        error: localized,
        raw,
      }),
      { status: 500 }
    );
  }
}
