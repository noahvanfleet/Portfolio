import { emailResponse } from "../api/email/route";
import { FormData } from "../components/Contact";

export async function sendEmail(data: FormData, timeoutMs = 8000): Promise<emailResponse> {
  const apiEndpoint = '/api/email';
  const controller = new AbortController();
  const timeout = setTimeout(() => {controller.abort();throw new Error("Request timed out.")}, timeoutMs);

  return new Promise<emailResponse>((resolve, reject) => {
    // checks honey pot
    if (data.honeypot.length > 0) {
      console.log('Honeypot detected. Returning...');
      clearTimeout(timeout);
      reject(new Error('Bot submission detected'));
      return;
    }

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to send email');
        return res.json();
      })
      .then((response) => {
        clearTimeout(timeout);
        resolve(response);
      })
      .catch((err) => {
        clearTimeout(timeout);
        if (err.name === 'AbortError') {
          reject(new Error('Request timed out'));
        } else {
          reject(err);
        }
      });
  });
}
