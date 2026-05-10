"use server";

import { registrationSchema, RegistrationFormData } from "./schema";

export async function signUpUser(data: RegistrationFormData) {
  const validation = registrationSchema.safeParse(data);

  if (!validation.success) {
    return { success: false, error: "Security check failed: Invalid data." };
  }

  try {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: responseData.detail || "Registration failed",
      };
    }

    return { success: true, data: responseData };
  } catch (error) {
    console.error("FastAPI Connection Error:", error);
    return {
      success: false,
      error: "Unable to connect to the authentication server.",
    };
  }
}
