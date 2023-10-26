import React from 'react';

function MailchimpSignup() {
  return (
    <div>
      <form
        action="https://gmail.us2.list-manage.com/subscribe/post?u=3fb57a7afb04c159f95c925f6&amp;id=00bb567b87&amp;f_id=00034ce0f0"
        method="POST"
        target="_blank"
      >
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="EMAIL"
            id="email"
            placeholder="Your email address"
            required
          />
		  <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
}

export default MailchimpSignup;