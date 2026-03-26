// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightClientMermaid from '@pasqal-io/starlight-client-mermaid';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Silio · Java 实战教程',
            plugins: [starlightClientMermaid()],
            defaultLocale: 'root',
            locales: {
                root: {
                    label: '简体中文',
                    lang: 'zh-CN',
                },
            },
            social: [{ icon: 'github', label: 'GitHub 仓库', href: 'https://github.com/woodynew/Silio' }],
            sidebar: [
                {
                    label: '开始',
                    items: [
                        { label: '欢迎', slug: 'index' },
                    ],
                },
                {
                    label: '教程',
                    autogenerate: { directory: 'tutorials/java-basics' },
                },
            ],
            components: {
                Pagination: './src/components/MarkAsRead.astro',
                Sidebar: './src/components/SidebarOverride.astro',
            },
            customCss: [
                './src/styles/custom.css'
            ],
        }),
    ],
});
