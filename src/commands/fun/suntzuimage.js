const { MessageEmbed } = require("discord.js")

module.exports ={
    name: "sunztuimage",
    description: "Get a picture of sun ztu",
    usage:"sunztuimage",
    category:"Fun",
    aliases: [""],
    run: async (client,message,args) =>{
        const images = [
            "https://toyourheartscontent.co.uk/wp-content/uploads/2019/08/Sun-Tzu.jpg",
            "https://images.squarespace-cdn.com/content/v1/56017ddae4b08aeb5c4851d5/1444078559834-SVPFL31TWEVW8Q1MCHK5/ke17ZwdGBToddI8pDm48kGmY3iNnsZSQokipO_9TKg9Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-us4jekoswKI8zp3US7KMGKLLV9tk8ijQI_gnbary-E6w/image-asset.jpeg",
            "https://pbs.twimg.com/profile_images/867435840515043338/LULUuRTT_400x400.jpg",
            "https://succeedfeed.com/wp-content/uploads/2019/04/sun-tzu-quotes-the-art-of-war-featured.jpg",
            "https://ichef.bbci.co.uk/images/ic/1200x675/p05z0wdv.jpg",
            "https://www.sfexaminer.com/wp-content/uploads/2019/02/sf.PoliticalLines.0216.jpg",
            "https://study.com/cimages/multimages/16/541c9627-3767-4c88-bb7e-63957abd9786_1.jpg",
            "https://www.shambhala.com/media/catalog/category/Sun_Tzu_open_rights.jpg",
            "https://vignette.wikia.nocookie.net/deadliestfiction/images/1/1a/Image-2.jpeg/revision/latest/top-crop/width/360/height/450?cb=20180121014622",
            "https://www.thefamouspeople.com/profiles/images/og-sun-tzu-261.jpg",
            "https://jamesclear.com/wp-content/uploads/2016/01/sun-tzu-statue.jpg",
            "https://www.newstatesman.com/sites/default/files/styles/lead_image/public/Longreads_2020/01/2020_05_sun_tzu.jpg?itok=TTmttWHT"
        ]


        const image = images[Math.floor(Math.random() * images.length)];

        let imageEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("An image of sun ztu")
            .setDescription(`here is an image of sun ztu`)
            .setImage(image)
            .setTimestamp()
            .setFooter("An image fro sun ztu");

        message.channel.send(imageEmbed);
    }
}