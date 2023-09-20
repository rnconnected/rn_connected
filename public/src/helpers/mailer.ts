// import nodemailer from 'nodemailer';
// import bcryptjs from 'bcryptjs';
// // import User from '@/models/userModel'


// export const sendEmail = async ({ email, emailType, userId }: any) => {
//     try {
//         const hasedToken = await bcryptjs.hash(userId.toString(), 10)

//         if (emailType === "VERIFY") {
//             await User.findByIdAndUpdate(userId, {
//                 verifyToken: hasedToken, verifyTokenExpiry: Date.now() + 360000
//             })// { new: true, runValidators: true })

//         } else if (emailType === "RESET") {
//             await User.findByIdAndUpdate(userId, {
//                 forgotPasswordToken: hasedToken, forgotPasswordTokenExpiry: Date.now() + 360000
//             })// { new: true, runValidators: true })

//         }

//         var transport = nodemailer.createTransport({
//             host: "sandbox.smtp.mailtrap.io",
//             port: 2525,
//             auth: {
//               user: process.env.USER,
//               pass: process.env.PASSWORD
//             }
//           });

//           const mailOptions = {
//               from: 'RN Connected' + " ",
//               to: email,
//               subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
//               html: `<p>Click <a href="${process.env.domain}/verifyemail?token=${hasedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}</p>`
//           }

//           const mailresponse = await transport.sendMail(mailOptions);
//           return mailresponse;

//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// }