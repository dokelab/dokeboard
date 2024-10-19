export interface Service {
  label: string
  href: string
  icon?: string
  description?: string
}

export interface ServiceGroup {
  name: string
  services: Service[]
  type: 'accordion' | 'section'
}

export interface DokeboardConfig {
  siteName: string
  serviceGroups?: ServiceGroup[]
  services?: Service[]
}

const config: DokeboardConfig = {
  siteName: 'dokehouse',
  serviceGroups: [
    {
      name: 'home',
      type: 'section',
      services: [
        {
          label: 'Home Assistant',
          icon: 'solar:home-wifi-angle-outline',
          href: 'https://github.com/home-assistant/core',
          description: 'Smart home automation',
        },
        {
          label: 'TrueNAS',
          icon: 'fluent:map-drive-16-regular',
          href: 'https://github.com/nextcloud',
          description: 'Network attached storage',
        },
      ],
    },
    {
      name: 'admin',
      type: 'section',
      services: [
        {
          label: 'OPNsense',
          icon: 'solar:wi-fi-router-minimalistic-outline',
          href: 'https://router.doke.house',
        },
        {
          label: 'Proxmox',
          icon: 'solar:server-outline',
          href: 'https://proxmox.doke.house',
        },
        {
          label: 'UniFi',
          icon: 'lucide:wifi',
          href: 'https://unifi.doke.house',
        },
        {
          label: 'Caddy',
          icon: 'solar:server-path-outline',
          href: 'https://caddy.doke.house',
        },
        {
          label: 'iVentoy',
          icon: 'solar:usb-bold',
          href: 'https://iventoy.doke.house',
        },
        {
          label: 'Coolify',
          icon: 'solar:cloud-outline',
          href: 'https://coolify.doke.house',
        },
      ],
    },
  ],
}

export default config
