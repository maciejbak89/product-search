import type { Product } from "@/types/product";

const SIMULATED_DELAY = Math.floor(Math.random() * 500) + 300;

export const fetchProducts = async (): Promise<Product[]> => {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY));

  return [
    {
      product: "Macbook Pro 16 inch (2020) For Sale",
      serial: "BA9212320",
      id: 1374,
      quantity: 122,
      total: 854.08,
      image:
        "https://superapple.cz/wp-content/uploads/2019/11/Apple_16-inch-MacBook-Pro_111319-800x445.jpg",
      description: {
        features: [
          "16-inch Retina display",
          "Intel Core i7 processor",
          "512GB SSD storage",
          "AMD Radeon Pro 5300M graphics",
        ],
        description:
          "The Macbook Pro 16 inch (2020) is a powerful laptop designed for professionals who need high performance. It offers a stunning Retina display and exceptional graphics capabilities, making it ideal for creative work.",
      },
    },
    {
      product: "Gaming Chair, local pickup only",
      serial: "XP8619376",
      id: 3933,
      quantity: 245,
      total: 943.65,
      description: {
        features: [
          "Ergonomic design",
          "Adjustable armrests",
          "Lumbar support",
          "Reclining backrest",
        ],
        description:
          "This gaming chair provides excellent comfort for long gaming sessions with its ergonomic design and adjustable features. Perfect for gamers seeking both style and functionality.",
      },
    },
    {
      product: "Macbook Air 13 inch (2020) For Sale",
      serial: "KH9212924",
      id: 9374,
      quantity: 134,
      total: 779.58,
      image:
        "https://images.iphonemod.net/wp-content/uploads/2020/03/apple-released-new-macbook-air-13-inch-2020-2-1024x828.png",
      description: {
        features: [
          "13-inch Retina display",
          "Apple M1 chip",
          "256GB SSD storage",
          "Fanless design for silent operation",
        ],
        description:
          "The Macbook Air 13 inch (2020) is a sleek and lightweight laptop with incredible speed and power efficiency thanks to the Apple M1 chip. It's perfect for both personal and professional use.",
      },
    },
    {
      product: "Heimer Miller Sofa (Mint Condition)",
      serial: "SD9212969",
      id: 5560,
      quantity: 26,
      total: 275.43,
      image: "https://www.pngall.com/wp-content/uploads/4/Sofa-PNG.png",
      description: {
        features: [
          "Mint condition",
          "Premium upholstery",
          "Modern design",
          "Comfortable seating",
        ],
        description:
          "This Heimer Miller Sofa offers luxurious comfort and a stylish design suitable for any modern living space. It's in mint condition and provides excellent durability.",
      },
    },
    {
      product: "iPad Pro 2017 Model",
      serial: "012921097",
      id: 6065,
      quantity: 76,
      total: 475.22,
      image:
        "https://brain-images-ssl.cdn.dixons.com/6/3/10165836/l_10165836_002.jpg",
      description: {
        features: [
          "10.5-inch Retina display",
          "A10X Fusion chip",
          "Apple Pencil support",
          "256GB storage capacity",
        ],
        description:
          "The iPad Pro 2017 Model is a versatile tablet with a stunning display and powerful performance. It supports Apple Pencil, making it ideal for creative tasks and productivity.",
      },
    },
    {
      product: "Gopro hero 7 (with receipt)",
      serial: "GM6812978",
      id: 4349,
      quantity: 47,
      total: 219.78,
      image:
        "https://gadgetsin.com/uploads/2018/10/gopro_hero7_black_waterproof_4k_action_camera_1.jpg",
      description: {
        features: [
          "4K video recording",
          "HyperSmooth stabilization",
          "Waterproof design",
          "Voice control",
        ],
        description:
          "Capture your adventures with the Gopro Hero 7, known for its impressive video quality and smooth stabilization. It's perfect for action-packed experiences and outdoor activities.",
      },
    },
    {
      product: "Dell Computer Monitor",
      serial: "HQ0192837",
      id: 9359,
      quantity: 54,
      total: 105.55,
      image: "https://www.techpowerup.com/img/08-09-27/320-7339.jpg",
      description: {
        features: [
          "Full HD resolution",
          "IPS display technology",
          "Adjustable stand",
          "HDMI and VGA ports",
        ],
        description:
          "This Dell Computer Monitor provides vibrant visuals with its Full HD display and IPS technology. It's an excellent choice for both work and entertainment setups.",
      },
    },
    {
      product: "AirPods Pro",
      serial: "LK89471045",
      id: 8829,
      quantity: 132,
      total: 928.41,
      image:
        "https://scoprilamela.it/wp-content/uploads/2020/09/airpods-pro.jpg",
      description: {
        features: [
          "Active Noise Cancellation",
          "Transparency mode",
          "Wireless charging",
          "Customizable fit",
        ],
        description:
          "Experience immersive sound with AirPods Pro, featuring Active Noise Cancellation and a customizable fit. They're perfect for uninterrupted music and calls on the go.",
      },
    },
    {
      product: "Playstation 4 Limited Edition",
      serial: "TU23182451",
      id: 5045,
      quantity: 15,
      total: 473.85,
      description: {
        features: [
          "Limited Edition design",
          "1TB storage capacity",
          "DualShock 4 controller included",
          "Blu-ray and streaming support",
        ],
        description:
          "The Playstation 4 Limited Edition is a must-have for collectors and gamers alike. It offers exceptional gaming performance and multimedia capabilities.",
      },
    },
    {
      product: "DJI Mavic Pro 2",
      serial: "JD45712035",
      id: 3536,
      quantity: 39,
      total: 576.28,
      image:
        "https://images.wired.it/wp-content/uploads/2016/09/28193850/1475077129_Dji-Mavic-Pro-.jpg",
      description: {
        features: [
          "4K camera with gimbal stabilization",
          "Obstacle avoidance sensors",
          "Long flight time",
          "Foldable and portable design",
        ],
        description:
          "The DJI Mavic Pro 2 is a high-performance drone designed for aerial photography and videography. Its advanced features make it perfect for both hobbyists and professionals.",
      },
    },
  ];
};
