<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { FaSolidCheck, FaSolidXmark } from 'svelte-icons-pack/fa';
	import { RiBusinessGlobalLine } from 'svelte-icons-pack/ri';

  type PricingSevice = {
    name: 'BASIC' | 'STANDARD' | 'PREMIUM';
    price: number;
    color: string;
    features: {
      name: string;
      available: boolean;
    }[];
  }
  const pricings: PricingSevice[] = [
    {
      name: 'BASIC',
      price: 1_000_000,
      color: 'text-gdn-2',
      features: [
        { name: 'Lorem ipsum dolor sit amet', available: true },
        { name: 'Lorem ipsum dolor sit amet', available: true },
        { name: 'Lorem ipsum dolor sit amet', available: false },
        { name: 'Lorem ipsum dolor sit amet', available: false },
        { name: 'Lorem ipsum dolor sit amet', available: false },
        { name: 'Lorem ipsum dolor sit amet', available: false }
      ]
    },
    {
      name: 'STANDARD',
      price: 5_000_000,
      color: 'text-blue-500',
      features: [
        { name: 'Lorem ipsum dolor sit amet', available: true },
        { name: 'Lorem ipsum dolor sit amet', available: true },
        { name: 'Lorem ipsum dolor sit amet', available: true },
        { name: 'Lorem ipsum dolor sit amet', available: false },
        { name: 'Lorem ipsum dolor sit amet', available: false },
        { name: 'Lorem ipsum dolor sit amet', available: false }
      ]
    },
    {
      name: 'PREMIUM',
      price: 13_000_000,
      color: 'text-yellow-700',
      features: [
        { name: 'Lorem ipsum dolor sit amet', available: true },
        { name: 'Lorem ipsum dolor sit amet', available: true },
        { name: 'Lorem ipsum dolor sit amet', available: true },
        { name: 'Lorem ipsum dolor sit amet', available: true },
        { name: 'Lorem ipsum dolor sit amet', available: true },
        { name: 'Lorem ipsum dolor sit amet', available: true }
      ]
    }
  ];
</script>

<Head title="Our Services" />

<div class="w-full flex flex-col mt-7">
  <div class="container max-w-5xl mx-auto">
    <div class="mb-6 flex flex-row gap-2 items-center justify-center">
      <Icon
        src={RiBusinessGlobalLine}
        size="45"
        className="fill-gdn-2 -mt-1"
      />
      <h2 class="text-3xl font-bold">Web Development</h2>
    </div>
    <div class="grid grid-cols-3 gap-4">
    {#each pricings as pricing (pricing.name)}
      <div class="border border-gray-300 bg-gray-50 rounded-lg px-5 pt-7 pb-8 flex flex-col gap-3">
        <div class="flex flex-col gap-1">
          <h3 class="text-sm font-semibold text-center {pricing.color}">{pricing.name}</h3>
          <span class="text-3xl font-bold text-center">Rp.{pricing.price.toLocaleString('id-ID')}</span>
        </div>
        <div class="flex flex-col gap-1 px-7 text-sm justify-center items-center">
          {#each pricing.features as feature (feature)}
            <div class="flex flex-row gap-1 items-center">
              <Icon
                src={feature.available ? FaSolidCheck : FaSolidXmark}
                className={feature.available ? "fill-gdn-2" : "fill-red-500"}
                size="18"
              />
              <span>{feature.name}</span>
            </div>
          {/each}
        </div>
        <div class="flex flex-row w-full h-fit justify-center items-center mt-3">
          <button class="w-fit rounded-full bg-gdn-2 hover:bg-gdn-2/90 text-white flex justify-center
          items-center py-1.5 px-7 text-sm cursor-pointer transition-colors duration-200">
            Select Plan
          </button>
        </div>
      </div>
    {/each}
    </div>
  </div>
</div>
