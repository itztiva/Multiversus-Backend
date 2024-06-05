import app from "..";

export default function () {
  app.get("/products", async (c) => {
    return c.json([
      {
        id: "664f9a19871ed36e0c31a138",
        slug: "twitch-garnet-volleyball",
        name: "Twitch skibidi Volleyball",
        description: "",
        visible: false,
        available_for_purchase: true,
        purchase_once: false,
        allow_free_purchase: false,
        tags: [],
        reward_actions: [],
        items: [
          {
            inventory_item_slug: "skin_c012_s07",
            quantity: 1,
            proxy_quantity: false,
          },
        ],
        data: {},
        created_at: "2024-05-23T19:33:45+00:00",
        updated_at: "2024-05-23T19:33:45+00:00",
        prices: [
          {
            item_id: "skin_c012_s07",
            slug: "skin_c012_s07",
            name: "skin_c012_s07",
            backend_name: "twitch-service",
          },
        ],
        is_store_defined: false,
      },
    ]);
  });
}
