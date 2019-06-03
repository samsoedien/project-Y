const htmlEmail = `
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.subject}</li>
  </ul>
  <h3>Your Message</h3>
  <p>${req.body.message}</p>
  
  <p>Dear ${req.body.name},</p>

  <p class="default-style">Thank you for your message. I will contact you at my earliest convenience.</p>
  <p class="default-style">Bedankt voor uw bericht. Ik zal zo spoedig contact met u opnemen.</p>
  
  <p class="default-style"><span style="font-size: 10pt; font-family: helvetica;">Kind regards, / Met vriendelijke groet,<br /></span></p>
  <p class="default-style"><span style="font-size: 10pt; font-family: helvetica;">Noerani Samsoedien</span></p>
  <div class="default-style"><span style="font-size: 7pt; font-family: helvetica;">--</span></div>
  <div class="default-style"><span style="font-size: 7pt; font-family: helvetica;">ir. N. Samsoedien</span></div>
  <div class="default-style"><span style="font-size: 7pt; font-family: helvetica;">Industrial Designer</span> <span style="font-size: 7pt; font-family: helvetica;"> </span></div>
  <div class="default-style"> </div>
  <div class="default-style"><span style="font-size: 7pt; font-family: helvetica;">T: +31 (0)6 308 378 22</span></div>
  <div class="default-style"><span style="font-size: 7pt; font-family: helvetica;">E: <a href="mailto:contact@samsoedien.com">contact@samsoedien.com</a></span></div>
  <div class="default-style"><span style="font-size: 7pt; font-family: helvetica;">W: <a href="https://www.samsoedien.com">https://www.samsoedien.com</a></span></div>
  <div class="default-style"><span style="font-size: 7pt; font-family: helvetica;">L: <a href="https://www.linkedin.com/in/samsoedien/">https://www.linkedin.com/in/samsoedien/</a></span></div>
`;
