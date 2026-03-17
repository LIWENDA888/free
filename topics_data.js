// topics_data.js
window.TOPICS_DATA = {
    CATEGORIES:[
        { id: 'all', label: '全部专题' },
        { id: 'ui', label: 'UI / 界面' },
        { id: 'layout', label: '排版 / 视觉' },
        { id: 'retro', label: '复古 / 潮流' }
    ],
    ITEMS:[
        {
            id: 't1', category: 'layout',
            title: '7款超美现代宋体精选',
            description: '温润如玉，极具人文气息的高品质免费商用宋体合集，无论是文艺类排版、传统文化项目还是新中式UI，都能完美胜任。',
            imageUrl: 'https://picsum.photos/id/36/1200/800',
            url: '#', 
            downloads:[
                { name: '合集打包下载 (夸克)', url: 'https://pan.quark.cn/s/example_song' },
                { name: '合集打包下载 (百度)', url: 'https://pan.baidu.com/s/example_song' }
            ]
        },
        {
            id: 't2', category: 'ui',
            title: '极简主义：适合UI界面的无衬线合集',
            description: '收录了8款字偶间距极其考究、在极小字号下依然保持高可读性的无衬线字体，专为现代网页与移动端设计打造。',
            imageUrl: 'https://picsum.photos/id/20/1200/800',
            url: '#', 
            downloads:[
                { name: '夸克网盘提取', url: 'https://pan.quark.cn/s/example_sans' },
                { name: '百度网盘提取', url: 'https://pan.baidu.com/s/example_sans' },
                { name: '123云盘提取', url: 'https://www.123pan.com/s/example_sans' }
            ]
        },
        {
            id: 't3', category: 'retro',
            title: '复古回潮：Y2K与像素风格字型',
            description: '带你回到千禧年！这套字库包含了粗犷的像素点阵字与充满电子科技感的Y2K流线字体，视觉冲击力满分。',
            imageUrl: 'https://picsum.photos/id/64/1200/800',
            url: '#', 
            downloads:[
                { name: '官方项目打包下载', url: 'https://example.com/topic-pixel-official' },
                { name: '夸克网盘下载', url: 'https://pan.quark.cn/s/example_pixel' }
            ]
        },
        {
            id: 't4', category: 'layout',
            title: '见字如面：自然书写的力量',
            description: '打包10款优质的手写与书法字体。笔触自然，连笔顺畅，让你的包装设计、明信片与海报充满温度与人情味。',
            imageUrl: 'https://picsum.photos/id/42/1200/800',
            url: '#', 
            downloads:[
                { name: '夸克网盘下载', url: 'https://pan.quark.cn/s/example_hand' },
                { name: '百度网盘下载', url: 'https://pan.baidu.com/s/example_hand' }
            ]
        }
    ]
};