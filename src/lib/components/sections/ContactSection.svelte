<script lang="ts">
    import { Button, SectionHeadline } from "$components";

    let name = $state("Tom");
    let email = $state("tom@gmail.com");
    let message = $state("Hello, I'm Tom");
    let isFormInvalid = $state(false);
    let isEmailSent = $state(false);
    let showErrorMessage = $state(false);
    let isLoading = $state(false);

    async function handleSubmit(e: Event) {
        e.preventDefault();
        if (name && email && message) {
            isLoading = true;
            const response = await fetch("/api/send-mail", {
                method: "POST",
                body: JSON.stringify({ name, email, message }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            isLoading = false;
            if (response.ok) {
                isEmailSent = true;
            } else {
                showErrorMessage = true;
            }
        } else {
            isFormInvalid = true;
        }
    }

    $effect(() => {
        if (name || email || message) {
            isFormInvalid = false;
        }
    });
</script>

<section class="mt-l">
    <SectionHeadline sectionName="contact-form">Let's Talk</SectionHeadline>
    <div class="form-container default-margin mt-m">
        {#if isEmailSent}
            <div class="spinner-container">
                <h4>Email sent successfully</h4>
            </div>
        {:else if isLoading}
            <div class="spinner-container">
                <div class="spinner"></div>
                <h4>Sending email...</h4>
            </div>
        {:else if showErrorMessage}
            <h4>Error sending email</h4>
        {:else}
            <form class="form">
                <input
                    class="text-input mb-m"
                    class:input-error={isFormInvalid && !Boolean(name.length)}
                    placeholder="Your Name"
                    bind:value={name}
                />
                <input
                    class="text-input mb-m"
                    class:input-error={isFormInvalid && !Boolean(email.length)}
                    placeholder="Your Email Address"
                    bind:value={email}
                />
                <textarea
                    class:input-error={isFormInvalid &&
                        !Boolean(message.length)}
                    placeholder="What's up?"
                    bind:value={message}
                ></textarea>
                <Button onclick={handleSubmit}>Send Message</Button>
            </form>
        {/if}
        <div class="form-text">
            <h3 class="bold mb-s">Talk to me about your project</h3>
            <p>
                I'm always excited to hear about new and innovative ideas!
                Whether you're in the early stages of planning or have a
                well-defined project, I'm here to help bring your vision to
                life. Feel free to drop me a message with some details about
                your project, and let's start a conversation about how we can
                work together. I look forward to connecting with you and
                discussing the possibilities. Talk to you soon!
            </p>
        </div>
    </div>
</section>

<style>
    section {
        padding-bottom: 140px;
    }
    .form-container {
        display: flex;
        justify-content: space-between;
    }
    .form-text {
        width: 39%;
    }
    .form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        width: 45%;
    }
    form * {
        font-size: 20px;
        font-weight: 500;
        font-family: "Inter Tight", sans-serif;
    }

    textarea,
    input {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        border: none;
        padding: 4px 12px;
        outline: none;
    }
    input {
        height: 40px;
    }
    textarea {
        height: 120px;
        margin-bottom: 40px;
    }
    textarea::placeholder,
    input::placeholder {
        font-size: 20px;
        font-weight: 400;
    }

    .input-error {
        background-color: rgba(233, 87, 87, 0.667);
    }
    .input-error::placeholder {
        color: white;
    }

    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: black;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: inline-block;
        margin-right: 10px;
        animation: spin 1s linear infinite;
        /* opacity: 0; */
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .spinner-container {
        display: flex;
    }
</style>
