import { describe, expect, it } from "vitest";

describe("CreateSubscription", () => {
  const input = {
    id: "1",
    userId: "1",
    products: ["1", "2", "3"],
  };

  const BASE_URL = "http://localhost:3000/subscriptions";

  it("should return status code 201 if subscription is not a combo", async () => {
    const req = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });
    expect(req.status).toBe(201);
  });

  it("should return signature price with discount applied", async () => {
    const req = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await req.json();
    expect(data.price).toBe(63);
    const req2 = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        ...input,
        products: input.products.slice(0, 3),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data2 = await req2.json();
    expect(data2.price).toBe(63);
    const req3 = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        ...input,
        products: input.products.slice(0, 2),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data3 = await req3.json();
    expect(data3.price).toBe(42.75);
  });
});
