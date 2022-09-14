const nodeMailer = require("nodemailer");

const mailPoster = nodeMailer.createTransport({
  service: "naver",
  host: "smtp.naver.com",
  port: 587,
  auth: {
    user: "46874689@naver.com",
    pass: "vhstnfl1!",
  },
});

const mailOpt = (user_data, title, contents) => {
  const mailOptions = {
    from: "46874689@naver.com",
    to: user_data.email,
    subject: title,
    text: contents,
  };
  return mailOptions;
};

const sendMail = (mailOption) => {
  mailPoster.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log("에러 " + error);
    } else {
      console.log("전송 완료 " + info.response);
    }
  });
};

sendMail(
  mailOpt({email: "sjk900700@gmail.com"}, "안녕하세요", "진경님 하이요 ㅎㅎ")
);
