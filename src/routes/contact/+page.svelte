<script lang="ts">
  import emailjs from '@emailjs/browser';
  let msg: string = "";

  function sendEmail(e: any) {
    emailjs.sendForm("service_sqqur6j", "template_gbm6i67", e.target, "user_YYNWXkVmSohHJhKZecVNT")
      .then((result: { text: any; }) => {
        msg = "Sent!"
      }, (error: { text: any; }) => {
        msg = "Oops! Looks like there was an error. Check that everything's filled in! Detailed information: " + error.text;
      });
  }

</script>

<h1 class="text-5xl font-black font-heading text-center mb-4">Contact Me</h1>
<p>I'll try my best to respond in a timely manner, however don't be afraid to poke me again if you haven't gotten a response and it's been a while.</p>
<div class="flex mt-4">
    <form class="space-y-4 mx-auto flex flex-col" on:submit|preventDefault={sendEmail}>
        <div>
        <input class="mr-2 rounded" type="text" name="user_name" placeholder="Your Name">
        <input class="rounded" type="email" name="user_email" placeholder="Your Email">
        </div>

        <textarea class="rounded" name="message" placeholder="Your Message"></textarea>

        <input class="font-bold" type="submit" value="Send">

    </form>

</div>

<p>{msg}</p>
