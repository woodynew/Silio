// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Java 实战教程',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/woodynew/Silio' }],
            sidebar: [
                {
                    label: '开始',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: '欢迎', slug: 'index' },
                    ],
                },
                {
                    label: '教程',
                    autogenerate: { directory: 'tutorials' },
                },
            ],
            components: {
                Pagination: './src/components/MarkAsRead.astro',
                Sidebar: './src/components/SidebarOverride.astro',
            },
        }),
    ],
});
