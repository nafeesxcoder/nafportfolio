async function verifyTurnstile(token: string, ip?: string) {
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: token,
          ...(ip ? { remoteip: ip } : {}),
        }),
      }
    );

    const data = await res.json();

    console.log("========== TURNSTILE DEBUG ==========");
    console.log("Token Present:", !!token);
    console.log("IP:", ip);
    console.log("Secret Present:", !!process.env.TURNSTILE_SECRET_KEY);
    console.log("Cloudflare Response:", data);
    console.log("====================================");

    return data.success === true;
  } catch (error) {
    console.error("Turnstile Error:", error);
    return false;
  }
}