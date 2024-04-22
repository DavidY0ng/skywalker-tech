<script>
    let links = [
        {
            title: "Smart Contract Development",
            link: '/what-we-do/defi-&-smart-contract#introduction',
            img:'1'
        },
        {
            title: "Crypto Exchange",
            link: '/what-we-do/crypto-exchange#introduction',
            img:'2'
        },
        {
            title: "Non-Fungible Token (NFT)",
            link: '/what-we-do/nft#introduction',
            img:'3'
        }
    ]
</script>

<div class="flex justify-center  bg-[#f0f4f8]">
    <div class="flex max-w-[1400px] w-full h-full justify-center items-center py-[100px]">
        <div class="w-full text-center">
            <div class="h1 text-[40px] md:text-[40px] lg:text-[45px] xl:text-[70px] mb-20 font-semibold">
                <div>
                   Services
                </div>
            </div>
            <div class="flex flex-col justify-between gap-20 lg:flex-row px-[30px]">
                {#each links as link}
                <a class="relative w-full bg-gray-500 card h-[400px] rounded-xl overflow-hidden" href='{link.link}'>
                    <img
                    src="/assets/img/defi_smart_contract/services/{link.img}.png"
                    alt='img{link.img}'
                    class="top-0 left-0 object-cover w-full h-full transition duration-300 ease-in-out rounded-xl hover:transform hover:scale-110"
                  />
                    <div class="absolute font-bold text-white left-5 bottom-5 h2 text-start w-[260px] text-[36px]">
                        {link.title}
                    </div>
                </a>
                {/each}
            </div>
           
            
        </div>
       
    </div>
</div>