import nodemailer from "nodemailer";

export async function POST(request) {
  const {
    email,
    name,
    phone,
    spaceType,
    spaceSize,
    city,
    district,
    description,
  } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"網站通知信" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_RECEIVER,
      subject: `📬 新表單通知：${name}`,
      html: `
        <h2>📥 有新表單填寫</h2>
        <p><b>姓名：</b> ${name}</p>
        <p><b>Email：</b> ${email}</p>
        <p><b>電話：</b> ${phone}</p>
        <p><b>空間性質：</b> ${spaceType}</p>
        <p><b>空間坪數：</b> ${spaceSize}</p>
        <p><b>縣市：</b> ${city}</p>
        <p><b>區域：</b> ${district}</p>
        <p><b>諮詢內容：</b><br/>${description.replace(/\n/g, "<br/>")}</p>
      `,
    });

    console.log("✅ 寄信成功", info);
    return new Response(JSON.stringify({ message: "寄信成功" }), { status: 200 });
  } catch (err) {
    console.error("❌ 寄信失敗：", err);
    return new Response(
      JSON.stringify({
        message: "寄信失敗",
        error: err.message,
      }),
      { status: 500 }
    );
  }
}
