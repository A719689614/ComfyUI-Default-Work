export const defaultGraph = {
	last_node_id: 9,
	last_link_id: 9,
	nodes: [
		{
			id: 7,
			type: "CLIPTextEncode",
			pos: [700, 389],
			size: { 0: 425.27801513671875, 1: 180.6060791015625 },
			flags: {},
			order: 3,
			mode: 0,
			inputs: [{ name: "clip", type: "CLIP", link: 5 }],
			outputs: [{ name: "CONDITIONING", type: "CONDITIONING", links: [6], slot_index: 0 }],
			properties: {},
			widgets_values: ["lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry"],
		},
		{
			id: 6,
			type: "CLIPTextEncode",
			pos: [700, 186],
			size: { 0: 422.84503173828125, 1: 164.31304931640625 },
			flags: {},
			order: 2,
			mode: 0,
			inputs: [{ name: "clip", type: "CLIP", link: 3 }],
			outputs: [{ name: "CONDITIONING", type: "CONDITIONING", links: [4], slot_index: 0 }],
			properties: {},
			widgets_values: ["1girl,close_up,grey skirt,white shirt, outdoors, pantyhose, looking at viewer, tie,,Cloudy, rainy,long hair,dark theme, soothing tones, muted colors,night, city, smile,"],
		},
		{
			id: 5,
			type: "EmptyLatentImage",
			pos: [700, 609],
			size: { 0: 425.27801513671875, 1: 106 },
			flags: {},
			order: 1,
			mode: 0,
			outputs: [{ name: "LATENT", type: "LATENT", links: [2], slot_index: 0 }],
			properties: {},
			widgets_values: [512, 768, 1],
		},
		{
			id: 3,
			type: "📊AC_LCM采样器",
			pos: [1160, 186],
			size: { 0: 315, 1: 530 },
			flags: {},
			order: 4,
			mode: 0,
			inputs: [
				{ name: "model", type: "MODEL", link: 1 },
				{ name: "positive", type: "CONDITIONING", link: 4 },
				{ name: "negative", type: "CONDITIONING", link: 6 },
				{ name: "latent_image", type: "LATENT", link: 2 },
			],
			outputs: [{ name: "LATENT", type: "LATENT", links: [7], slot_index: 0 }],
			properties: {},
			widgets_values: [156680208700286, "randomize", 10, 1.3, "lcm", "normal", 1],
		},
		{
			id: 8,
			type: "VAEDecode",
			pos: [1500, 188],
			size: { 0: 310, 1: 46 },
			flags: {},
			order: 5,
			mode: 0,
			inputs: [
				{ name: "samples", type: "LATENT", link: 7 },
				{ name: "vae", type: "VAE", link: 8 },
			],
			outputs: [{ name: "IMAGE", type: "IMAGE", links: [9], slot_index: 0 }],
			properties: {},
		},
		{
			id: 9,
			type: "PreviewImage",
			pos: [1500, 270],
			size: { 0: 310, 1: 445 },
			flags: {},
			order: 6,
			mode: 0,
			inputs: [{ name: "images", type: "IMAGE", link: 9 }],
			properties: {},
		},
		{
			id: 4,
			type: "📺AC_Checkpoint加载器",
			pos: [270, 186],
			size: { 0: 390, 1: 198 },
			flags: {},
			order: 0,
			mode: 0,
			outputs: [
				{ name: "MODEL", type: "MODEL", links: [1], slot_index: 0 },
				{ name: "CLIP", type: "CLIP", links: [3,5], slot_index: 1 },
				{ name: "VAE", type: "VAE", links: [8], slot_index: 2 },
			],
			properties: {},
			widgets_values: [],
		},
		{
			id: 10,
			type: "📟AC_Lora加载器",
			pos: [270,420],
			size: {0: 390, 1: 298 },
			flags: {},
			order: 0,
			mode: 0,
			outputs: [
				// { name: "MODEL", type: "MODEL", links: [1], slot_index: 0 },
				// { name: "CLIP", type: "CLIP", Links: [3,5], slot_index: 1},
			],
			properties: {},
		}
	],
	links: [
		[1, 4, 0, 3, 0, "MODEL"],
		// [,,,,,"Lora"],
		[2, 5, 0, 3, 3, "LATENT"],
		[3, 4, 1, 6, 0, "CLIP"],
		[4, 6, 0, 3, 1, "CONDITIONING"],
		[5, 4, 1, 7, 0, "CLIP"],
		[6, 7, 0, 3, 2, "CONDITIONING"],
		[7, 3, 0, 8, 0, "LATENT"],
		[8, 4, 2, 8, 1, "VAE"],
		[9, 8, 0, 9, 0, "IMAGE"],
	],
	groups: [],
	config: {},
	extra: {},
	version: 0.4,
};
