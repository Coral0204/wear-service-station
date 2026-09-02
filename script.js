/* =========================================================
   服装开发参考站
   script.js
   最终版
   ========================================================= */


/* =========================================================
   1. 类目数据
   ========================================================= */

const categoryData = {

    /* -------------------------
       标码男装
       ------------------------- */
    standard: {
        title: "标码男装",
        subtitle: "Standard Menswear",

        items: [
            {
                name: "类目占位符 01",
                path: "一级类目 > 二级类目 > 类目占位符 01"
            },
            {
                name: "类目占位符 02",
                path: "一级类目 > 二级类目 > 类目占位符 02"
            },
            {
                name: "类目占位符 03",
                path: "一级类目 > 二级类目 > 类目占位符 03"
            },
            {
                name: "类目占位符 04",
                path: "一级类目 > 二级类目 > 类目占位符 04"
            },
            {
                name: "类目占位符 05",
                path: "一级类目 > 二级类目 > 类目占位符 05"
            },
            {
                name: "类目占位符 06",
                path: "一级类目 > 二级类目 > 类目占位符 06"
            },
            {
                name: "类目占位符 07",
                path: "一级类目 > 二级类目 > 类目占位符 07"
            },
            {
                name: "类目占位符 08",
                path: "一级类目 > 二级类目 > 类目占位符 08"
            }
        ]
    },


    /* -------------------------
       大码男装
       ------------------------- */
    plus: {
        title: "大码男装",
        subtitle: "Plus Size Menswear",

        items: [
            {
                name: "类目占位符 01",
                path: "一级类目 > 二级类目 > 类目占位符 01"
            },
            {
                name: "类目占位符 02",
                path: "一级类目 > 二级类目 > 类目占位符 02"
            },
            {
                name: "类目占位符 03",
                path: "一级类目 > 二级类目 > 类目占位符 03"
            },
            {
                name: "类目占位符 04",
                path: "一级类目 > 二级类目 > 类目占位符 04"
            },
            {
                name: "类目占位符 05",
                path: "一级类目 > 二级类目 > 类目占位符 05"
            },
            {
                name: "类目占位符 06",
                path: "一级类目 > 二级类目 > 类目占位符 06"
            }
        ]
    },


    /* -------------------------
       孕妇装
       ------------------------- */
    maternity: {
    title: "孕妇装",
    subtitle: "Maternity Wear",

    items: [

        {
            name: "孕妇运动裙",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇运动服 > 孕妇运动裙"
        },

        {
            name: "孕妇运动T恤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇运动服 > 孕妇运动T恤"
        },

        {
            name: "孕妇针织背心",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇毛衣、针织衫 > 孕妇针织背心"
        },

        {
            name: "大码孕妇针织背心",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇毛衣、针织衫 > 大码孕妇针织背心"
        },

        {
            name: "孕妇长睡袍",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇睡衣、家居服 > 孕妇睡裙 > 孕妇长睡袍"
        },

        {
            name: "大码孕妇长睡袍",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇睡衣、家居服 > 大码孕妇睡裙 > 大码孕妇长睡袍"
        },

        {
            name: "孕妇长裤套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇套装 > 孕妇长裤套装"
        },

        {
            name: "大码孕妇长裤套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇套装 > 大码孕妇长裤套装"
        },

        {
            name: "孕妇裤子",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇裤子"
        },

        {
            name: "其他（孕妇裤子）",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇裤子 > 其他（孕妇裤子）"
        },

        {
            name: "大码孕妇裤子",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇裤子"
        },

        {
            name: "孕妇长版上衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇T恤、背心 > 孕妇长版上衣"
        },

        {
            name: "大码孕妇长版上衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇T恤、背心 > 大码孕妇长版上衣"
        },

        {
            name: "孕妇运动裤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇运动服 > 孕妇运动裤"
        },

        {
            name: "大码孕妇运动裤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇运动服 > 大码孕妇运动裤"
        },

        {
            name: "孕妇卫衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇运动服 > 孕妇卫衣"
        },

        {
            name: "孕妇卫衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇时尚帽衫和卫衣 > 孕妇卫衣"
        },

        {
            name: "大码孕妇运动帽衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇运动服 > 大码孕妇运动帽衫"
        },

        {
            name: "大码孕妇运动裙",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇运动服 > 大码孕妇运动裙"
        },

        {
            name: "孕妇运动短裤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇运动服 > 孕妇运动短裤"
        },

        {
            name: "大码孕妇运动短裤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇运动服 > 大码孕妇运动短裤"
        },

        {
            name: "孕妇哺乳扣角领衬衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳上衣和 T 恤 > 孕妇哺乳衬衫和扣角领衬衫 > 孕妇哺乳扣角领衬衫"
        },

        {
            name: "孕妇扣角领衬衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇T恤、背心 > 孕妇衬衫和罩衣 > 孕妇扣角领衬衫"
        },

        {
            name: "大码孕妇扣角领衬衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇T恤、背心 > 大码孕妇衬衫和罩衣 > 大码孕妇扣角领衬衫"
        },

        {
            name: "孕妇泳衣套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇游泳衣 > 孕妇比基尼 > 孕妇泳衣套装"
        },

        {
            name: "大码孕妇坦基尼套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇游泳衣 > 大码孕妇背心式比基尼 > 大码孕妇坦基尼套装"
        },

        {
            name: "大码孕妇泳衣套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇游泳衣 > 大码孕妇比基尼 > 大码孕妇泳衣套装"
        },

        {
            name: "孕妇泳衣上装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇游泳衣 > 孕妇比基尼 > 孕妇泳衣上装"
        },

        {
            name: "大码孕妇坦基尼上衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇游泳衣 > 大码孕妇背心式比基尼 > 大码孕妇坦基尼上衣"
        },

        {
            name: "大码孕妇泳衣上装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇游泳衣 > 大码孕妇比基尼 > 大码孕妇泳衣上装"
        },

        {
            name: "孕妇泳衣下装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇游泳衣 > 孕妇背心式比基尼 > 孕妇泳衣下装"
        },

        {
            name: "孕妇泳衣下装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇游泳衣 > 孕妇比基尼 > 孕妇泳衣下装"
        },

        {
            name: "大码孕妇泳衣下装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇游泳衣 > 大码孕妇背心式比基尼 > 大码孕妇泳衣下装"
        },

        {
            name: "大码孕妇泳衣下装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇游泳衣 > 大码孕妇比基尼 > 大码孕妇泳衣下装"
        },

        {
            name: "孕妇商务西装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇商务西装"
        },

        {
            name: "大码孕妇商务西装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇商务西装"
        },

        {
            name: "大码孕妇卫衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇运动服 > 大码孕妇卫衣"
        },

        {
            name: "大码孕妇卫衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇时尚帽衫和卫衣 > 大码孕妇卫衣"
        },

        {
            name: "孕妇外套、夹克和背心",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇外套、夹克和背心"
        },

        {
            name: "大码孕妇外套、夹克和背心",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇外套、夹克和背心"
        },

        {
            name: "托腹裤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇内衣 > 托腹裤"
        },

        {
            name: "大码托腹裤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇内衣 > 大码托腹裤"
        },

        {
            name: "其他（大码孕妇装）",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 其他（大码孕妇装）"
        },

        {
            name: "孕妇套头衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇毛衣、针织衫 > 孕妇套头衫"
        },

        {
            name: "大码孕妇套头衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇毛衣、针织衫 > 大码孕妇套头衫"
        },

        {
            name: "孕妇睡裙",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇睡衣、家居服 > 孕妇睡裙 > 孕妇睡裙"
        },

        {
            name: "大码孕妇睡裙",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇睡衣、家居服 > 大码孕妇睡裙 > 大码孕妇睡裙"
        },

        {
            name: "孕妇睡袍",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇睡衣、家居服 > 孕妇睡袍"
        },

        {
            name: "孕妇浴袍",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女装 > 女士内衣、睡衣和家居服 > 女士睡衣 > 孕妇浴袍"
        },

        {
            name: "大码孕妇睡袍",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇睡衣、家居服 > 大码孕妇睡袍"
        },

        {
            name: "其他（孕妇装）",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 其他（孕妇装）"
        },

        {
            name: "孕妇罩衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇游泳衣 > 孕妇罩衣"
        },

        {
            name: "孕妇罩衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇T恤、背心 > 孕妇衬衫和罩衣 > 孕妇罩衣"
        },

        {
            name: "大码孕妇罩衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇游泳衣 > 大码孕妇罩衣"
        },

        {
            name: "大码孕妇罩衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇T恤、背心 > 大码孕妇衬衫和罩衣 > 大码孕妇罩衣"
        },

        {
            name: "孕妇牛仔裤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇牛仔裤"
        },

        {
            name: "大码孕妇牛仔裤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇牛仔裤"
        },

        {
            name: "孕妇内衣套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇内衣 > 孕妇内衣套装"
        },

        {
            name: "大码孕妇内衣套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇内衣 > 大码孕妇内衣套装"
        },

        {
            name: "孕妇运动帽衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇运动服 > 孕妇运动帽衫"
        },

        {
            name: "孕妇帽衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇时尚帽衫和卫衣 > 孕妇帽衫"
        },

        {
            name: "大码孕妇帽衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇时尚帽衫和卫衣 > 大码孕妇帽衫"
        },

        {
            name: "孕妇连衣裙",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇连衣裙"
        },

        {
            name: "其他（孕妇连衣裙）",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇连衣裙 > 其他（孕妇连衣裙）"
        },

        {
            name: "大码孕妇连衣裙",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇连衣裙"
        },

        {
            name: "孕妇哺乳连体泳衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳泳衣 > 孕妇哺乳连体泳衣"
        },

        {
            name: "孕妇连体泳衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇游泳衣 > 孕妇连体泳衣"
        },

        {
            name: "大码孕妇连体泳衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇游泳衣 > 大码孕妇连体泳衣"
        },

        {
            name: "孕妇连裤袜",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇打底裤袜 > 孕妇连裤袜"
        },

        {
            name: "孕妇开衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇毛衣、针织衫 > 孕妇开衫"
        },

        {
            name: "大码孕妇开衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇毛衣、针织衫 > 大码孕妇开衫"
        },

        {
            name: "孕妇家居服套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇睡衣、家居服 > 孕妇家居服套装"
        },

        {
            name: "大码孕妇家居服套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇睡衣、家居服 > 大码孕妇家居服套装"
        },

        {
            name: "孕妇家居服上装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇睡衣、家居服 > 孕妇家居服上装"
        },

        {
            name: "大码孕妇家居服上装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇睡衣、家居服 > 大码孕妇家居服上装"
        },

        {
            name: "孕妇家居服下装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇睡衣、家居服 > 孕妇家居服下装"
        },

        {
            name: "大码孕妇家居服下装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇睡衣、家居服 > 大码孕妇家居服下装"
        },

        {
            name: "孕妇哺乳亨利衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳上衣和 T 恤 > 孕妇哺乳亨利衫"
        },

        {
            name: "孕妇亨利衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇T恤、背心 > 孕妇亨利衫"
        },

        {
            name: "大码孕妇亨利衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇T恤、背心 > 大码孕妇亨利衫"
        },

        {
            name: "孕妇防晒服",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇游泳衣 > 孕妇防晒服"
        },

        {
            name: "大码孕妇防晒服",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇游泳衣 > 大码孕妇防晒服"
        },

        {
            name: "孕妇短裤套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇套装 > 孕妇短裤套装"
        },

        {
            name: "大码孕妇短裤套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇套装 > 大码孕妇短裤套装"
        },

        {
            name: "孕妇短裤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇短裤"
        },

        {
            name: "其他（孕妇短裤）",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇短裤 > 其他（孕妇短裤）"
        },

        {
            name: "大码孕妇短裤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇短裤"
        },

        {
            name: "孕妇紧身裤袜",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇打底裤袜 > 孕妇紧身裤袜"
        },

        {
            name: "孕妇打底裤、裤袜",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇打底裤、裤袜"
        },

        {
            name: "大码孕妇打底裤、裤袜",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇打底裤、裤袜"
        },

        {
            name: "孕妇哺乳长睡袍",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳睡衣 > 孕妇哺乳睡裙和长睡袍 > 孕妇哺乳长睡袍"
        },

        {
            name: "大码孕妇哺乳长睡袍",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳睡衣 > 大码孕妇哺乳睡裙和长睡袍 > 大码孕妇哺乳长睡袍"
        },

        {
            name: "孕妇哺乳长版上衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳上衣和 T 恤 > 孕妇哺乳长版上衣"
        },

        {
            name: "大码孕妇哺乳长版上衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳上衣和 T 恤 > 大码孕妇哺乳长版上衣"
        },

        {
            name: "大码孕妇哺乳扣角领衬衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳上衣和 T 恤 > 大码孕妇哺乳衬衫和扣角领衬衫 > 大码孕妇哺乳扣角领衬衫"
        },

        {
            name: "孕妇哺乳睡衣上衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳睡衣 > 孕妇哺乳睡衣上衣"
        },

        {
            name: "大码孕妇哺乳睡衣上衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳睡衣 > 大码孕妇哺乳睡衣上衣"
        },

        {
            name: "孕妇哺乳睡裙",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳睡衣 > 孕妇哺乳睡裙和长睡袍 > 孕妇哺乳睡裙"
        },

        {
            name: "大码孕妇哺乳睡裙",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳睡衣 > 大码孕妇哺乳睡裙和长睡袍 > 大码孕妇哺乳睡裙"
        },

        {
            name: "大码孕妇哺乳坦基尼",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳泳衣 > 大码孕妇哺乳坦基尼"
        },

        {
            name: "孕妇哺乳连衣裙",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳连衣裙"
        },

        {
            name: "大码孕妇哺乳连衣裙",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳连衣裙"
        },

        {
            name: "大码孕妇哺乳连体泳衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳泳衣 > 大码孕妇哺乳连体泳衣"
        },

        {
            name: "孕妇哺乳睡衣套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳睡衣 > 孕妇哺乳睡衣套装"
        },

        {
            name: "大码孕妇哺乳睡衣套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳睡衣 > 大码孕妇哺乳睡衣套装"
        },

        {
            name: "大码孕妇哺乳亨利衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳上衣和 T 恤 > 大码孕妇哺乳亨利衫"
        },

        {
            name: "孕妇哺乳吊带衫和背心",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳上衣和 T 恤 > 孕妇哺乳吊带衫和背心"
        },

        {
            name: "大码孕妇哺乳吊带衫和背心",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳上衣和 T 恤 > 大码孕妇哺乳吊带衫和背心"
        },

        {
            name: "孕妇哺乳衬衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳上衣和 T 恤 > 孕妇哺乳衬衫和扣角领衬衫 > 孕妇哺乳衬衫"
        },

        {
            name: "大码孕妇哺乳衬衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳上衣和 T 恤 > 大码孕妇哺乳衬衫和扣角领衬衫 > 大码孕妇哺乳衬衫"
        },

        {
            name: "孕妇哺乳坦基尼",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳泳衣 > 孕妇哺乳坦基尼"
        },

        {
            name: "孕妇哺乳时尚背心",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳上衣和 T 恤 > 孕妇哺乳时尚背心"
        },

        {
            name: "大码孕妇哺乳时尚背心",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳上衣和 T 恤 > 大码孕妇哺乳时尚背心"
        },

        {
            name: "孕妇哺乳针织衫和 T 恤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳上衣和 T 恤 > 孕妇哺乳针织衫和 T 恤"
        },

        {
            name: "大码孕妇哺乳针织衫和 T 恤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳上衣和 T 恤 > 大码孕妇哺乳针织衫和 T 恤"
        },

        {
            name: "孕妇哺乳 Polo 衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇哺乳服装 > 孕妇哺乳上衣和 T 恤 > 孕妇哺乳 Polo 衫"
        },

        {
            name: "大码孕妇哺乳 Polo 衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇哺乳服装 > 大码孕妇哺乳上衣和 T 恤 > 大码孕妇哺乳 Polo 衫"
        },

        {
            name: "孕妇坦基尼套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇游泳衣 > 孕妇背心式比基尼 > 孕妇坦基尼套装"
        },

        {
            name: "孕妇坦基尼上衣",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇游泳衣 > 孕妇背心式比基尼 > 孕妇坦基尼上衣"
        },

        {
            name: "孕妇背心",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇T恤、背心 > 孕妇背心"
        },

        {
            name: "孕妇时尚背心",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇T恤、背心 > 孕妇时尚背心"
        },

        {
            name: "大码孕妇背心",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇T恤、背心 > 大码孕妇背心"
        },

        {
            name: "大码孕妇时尚背心",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇T恤、背心 > 大码孕妇时尚背心"
        },

        {
            name: "孕妇半身裙套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇套装 > 孕妇半身裙套装"
        },

        {
            name: "大码孕妇半身裙套装",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇套装 > 大码孕妇半身裙套装"
        },

        {
            name: "孕妇半身裙",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇半身裙"
        },

        {
            name: "大码孕妇半身裙",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇半身裙"
        },

        {
            name: "孕妇T恤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇T恤、背心 > 孕妇T恤"
        },

        {
            name: "大码孕妇T恤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇T恤、背心 > 大码孕妇T恤"
        },

        {
            name: "大码孕妇运动T恤",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇运动服 > 大码孕妇运动T恤"
        },

        {
            name: "孕妇Polo衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 孕妇装 > 孕妇T恤、背心 > 孕妇Polo衫"
        },

        {
            name: "大码孕妇Polo衫",
            path: "服装、鞋靴和珠宝饰品 > 女士时尚 > 女士商店 > 大码孕妇装 > 大码孕妇T恤、背心 > 大码孕妇Polo衫"
        }

    ]
}


/* =========================================================
   2. 当前选中的类目
   ========================================================= */

let currentCategory = null;


/* =========================================================
   3. 页面加载
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    handleRoute();
});


/* =========================================================
   4. 路由处理
   ========================================================= */

function handleRoute() {

    const hash = window.location.hash;

    const categoryKey = hash
        .replace("#", "")
        .trim();

    if (
        categoryKey &&
        Object.prototype.hasOwnProperty.call(categoryData, categoryKey)
    ) {

        showCategory(categoryKey);

    } else {

        showHome();

    }
}


/* =========================================================
   5. 显示首页
   ========================================================= */

function showHome() {

    currentCategory = null;

    const homeView =
        document.getElementById("homeView");

    const categoryView =
        document.getElementById("categoryView");


    if (homeView) {
        homeView.classList.remove("hidden");
    }


    if (categoryView) {
        categoryView.classList.add("hidden");
    }


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================================
   6. 打开类目
   ========================================================= */

function openCategory(categoryKey) {

    if (
        !categoryKey ||
        !Object.prototype.hasOwnProperty.call(
            categoryData,
            categoryKey
        )
    ) {

        console.error(
            "不存在的类目：",
            categoryKey
        );

        return;
    }


    window.location.hash = categoryKey;
}


/* =========================================================
   7. 显示类目页面
   ========================================================= */

function showCategory(categoryKey) {

    const data =
        categoryData[categoryKey];


    if (!data) {

        showHome();

        return;
    }


    currentCategory = categoryKey;


    const homeView =
        document.getElementById("homeView");

    const categoryView =
        document.getElementById("categoryView");

    const categoryTitle =
        document.getElementById("categoryTitle");

    const categorySubtitle =
        document.getElementById("categorySubtitle");

    const categoryCount =
        document.getElementById("categoryCount");

    const categorySearch =
        document.getElementById("categorySearch");

    const clearSearch =
        document.getElementById("clearSearch");


    /* 首页隐藏 */
    if (homeView) {
        homeView.classList.add("hidden");
    }


    /* 类目页显示 */
    if (categoryView) {
        categoryView.classList.remove("hidden");
    }


    /* 标题 */
    if (categoryTitle) {
        categoryTitle.textContent =
            data.title;
    }


    /* 英文副标题 */
    if (categorySubtitle) {
        categorySubtitle.textContent =
            data.subtitle;
    }


    /* 类目数量 */
    if (categoryCount) {
        categoryCount.textContent =
            data.items.length;
    }


    /* 清空搜索 */
    if (categorySearch) {
        categorySearch.value = "";
    }


    /* 隐藏清除按钮 */
    if (clearSearch) {
        clearSearch.classList.add("hidden");
    }


    /* 显示全部类目 */
    renderCategories(
        data.items,
        ""
    );


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================================
   8. 返回首页
   ========================================================= */

function goHome() {

    currentCategory = null;


    /*
     * 去掉 URL 中的 #类目
     */
    history.pushState(
        null,
        "",
        window.location.pathname +
        window.location.search
    );


    showHome();
}


/* =========================================================
   9. 浏览器前进 / 后退
   ========================================================= */

window.addEventListener(
    "hashchange",
    handleRoute
);


window.addEventListener(
    "popstate",
    handleRoute
);


/* =========================================================
   10. 类目搜索
   ========================================================= */

function searchCategories() {

    if (!currentCategory) {
        return;
    }


    const data =
        categoryData[currentCategory];


    if (!data) {
        return;
    }


    const input =
        document.getElementById(
            "categorySearch"
        );


    const clearButton =
        document.getElementById(
            "clearSearch"
        );


    if (!input) {
        return;
    }


    const keyword =
        input.value.trim();


    /* -------------------------
       清除按钮
       ------------------------- */

    if (clearButton) {

        if (keyword) {

            clearButton.classList.remove(
                "hidden"
            );

        } else {

            clearButton.classList.add(
                "hidden"
            );
        }
    }


    /* -------------------------
       没有关键词
       显示全部
       ------------------------- */

    if (!keyword) {

        renderCategories(
            data.items,
            ""
        );

        return;
    }


    /* -------------------------
       模糊搜索
       ------------------------- */

    const normalizedKeyword =
        normalizeText(keyword);


    const results =
        data.items.filter(function (item) {

            const searchText =
                normalizeText(
                    item.name +
                    " " +
                    item.path
                );


            return searchText.includes(
                normalizedKeyword
            );

        });


    renderCategories(
        results,
        keyword
    );
}


/* =========================================================
   11. 清除搜索
   ========================================================= */

function clearSearch() {

    const input =
        document.getElementById(
            "categorySearch"
        );


    const clearButton =
        document.getElementById(
            "clearSearch"
        );


    if (input) {

        input.value = "";

        input.focus();
    }


    if (clearButton) {

        clearButton.classList.add(
            "hidden"
        );
    }


    if (!currentCategory) {
        return;
    }


    const data =
        categoryData[currentCategory];


    if (!data) {
        return;
    }


    renderCategories(
        data.items,
        ""
    );
}


/* =========================================================
   12. 快速搜索
   ========================================================= */

function quickSearch(keyword) {

    const input =
        document.getElementById(
            "categorySearch"
        );


    if (!input) {
        return;
    }


    input.value = keyword;


    searchCategories();


    input.focus();
}


/* =========================================================
   13. 搜索文字标准化
   ========================================================= */

function normalizeText(text) {

    return String(text)
        .toLowerCase()
        .replace(/\s+/g, "")
        .trim();
}


/* =========================================================
   14. 渲染类目列表
   ========================================================= */

function renderCategories(
    items,
    keyword
) {

    const list =
        document.getElementById(
            "categoryList"
        );


    const emptyState =
        document.getElementById(
            "emptyState"
        );


    const resultText =
        document.getElementById(
            "resultText"
        );


    if (!list) {
        return;
    }


    /* 清空旧内容 */
    list.innerHTML = "";


    /* 搜索结果数量 */
    if (resultText) {

        resultText.textContent =
            `共 ${items.length} 个`;
    }


    /* -------------------------
       没有搜索结果
       ------------------------- */

    if (items.length === 0) {

        list.classList.add(
            "hidden"
        );


        if (emptyState) {

            emptyState.classList.remove(
                "hidden"
            );
        }


        return;
    }


    /* -------------------------
       有结果
       ------------------------- */

    list.classList.remove(
        "hidden"
    );


    if (emptyState) {

        emptyState.classList.add(
            "hidden"
        );
    }


    /* -------------------------
       生成类目
       ------------------------- */

    items.forEach(function (item) {

        const itemElement =
            document.createElement("div");


        itemElement.className =
            "category-item";


        /* 类目名称 */

        const nameElement =
            document.createElement("div");


        nameElement.className =
            "category-name";


        nameElement.innerHTML =
            highlightText(
                escapeHtml(item.name),
                keyword
            );


        /* 类目路径 */

        const pathElement =
            document.createElement("div");


        pathElement.className =
            "category-path";


        pathElement.innerHTML =
            formatPath(
                item.path,
                keyword
            );


        /* 添加 */

        itemElement.appendChild(
            nameElement
        );


        itemElement.appendChild(
            pathElement
        );


        list.appendChild(
            itemElement
        );

    });
}


/* =========================================================
   15. 格式化类目路径
   ========================================================= */

function formatPath(
    path,
    keyword
) {

    return String(path)
        .split(">")
        .map(function (part) {

            return highlightText(
                escapeHtml(
                    part.trim()
                ),
                keyword
            );

        })
        .join(
            '<span class="path-arrow">›</span>'
        );
}


/* =========================================================
   16. 搜索结果高亮
   ========================================================= */

function highlightText(
    text,
    keyword
) {

    if (!keyword) {
        return text;
    }


    const safeKeyword =
        escapeRegExp(keyword);


    if (!safeKeyword) {
        return text;
    }


    const regex =
        new RegExp(
            "(" +
            safeKeyword +
            ")",
            "gi"
        );


    return text.replace(
        regex,
        '<mark class="highlight">$1</mark>'
    );
}


/* =========================================================
   17. HTML 转义
   ========================================================= */

function escapeHtml(text) {

    return String(text)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


/* =========================================================
   18. 正则特殊字符转义
   ========================================================= */

function escapeRegExp(text) {

    return String(text).replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );
}


/* =========================================================
   19. 防止回车提交 / 刷新
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        const target =
            event.target;


        if (
            target &&
            target.id === "categorySearch" &&
            event.key === "Enter"
        ) {

            event.preventDefault();

            searchCategories();
        }

    }
);


/* =========================================================
   20. 暴露给 HTML onclick 使用
   ========================================================= */

window.openCategory =
    openCategory;


window.goHome =
    goHome;


window.searchCategories =
    searchCategories;


window.clearSearch =
    clearSearch;


window.quickSearch =
    quickSearch;
