const structure = [
  {
    header: "Acura Integra",
    link: "/assets/images/main.png",
    paragraph: "The car is a sleek, modern vehicle designed for both comfort and efficiency. With its aerodynamic shape and powerful engine, it combines style with performance. Inside, the cabin is spacious, offering plush seating and the latest in-car technology, including a touchscreen infotainment system and advanced safety features. The fuel efficiency is impressive, making it ideal for both city driving and long road trips. It handles smoothly, with responsive steering and a suspension system that absorbs bumps with ease. The car's exterior features LED headlights and alloy wheels, giving it a sharp, contemporary look. Whether you're driving in heavy traffic or cruising on the highway, the car provides a quiet and comfortable ride. Its hybrid option makes it eco-friendly, reducing emissions without compromising on power. Overall, it's a great blend of practicality and luxury, perfect for drivers who want both efficiency and a bit of flair."
  },
  { 
    header: "BMW MAX",
    link: "/assets/images/orange_big.jpg", 
    paragraph: "The car is a powerful yet fuel-efficient vehicle, designed to deliver a smooth and enjoyable driving experience. Equipped with a turbocharged engine, it offers impressive acceleration while maintaining excellent gas mileage. The interior is sleek and modern, featuring leather seats, a digital dashboard, and advanced climate control. Safety is a priority, with cutting-edge features like lane assist, automatic emergency braking, and adaptive cruise control. The infotainment system is intuitive, supporting both Apple CarPlay and Android Auto for seamless connectivity. The car's exterior design is bold and aggressive, with sharp lines and a distinctive front grille. LED headlights and taillights add a futuristic touch, enhancing both visibility and style. The spacious trunk provides ample storage for long trips or daily errands. With its refined suspension, the car glides over rough roads, ensuring a comfortable ride. Overall, it's a well-rounded vehicle, perfect for both city driving and weekend getaways."
  },
  {
    header: "VM Stargaze",
    link: "/assets/images/green.png",
    paragraph: "The sleek red sports car sped down the winding mountain road, its engine purring like a contented cat. The driver gripped the leather-wrapped steering wheel, feeling the car respond to every subtle motion. Sunlight glinted off the polished chrome details, highlighting its aerodynamic curves. Inside, the seats hugged the driver and passenger, blending luxury with performance. As the car approached a sharp turn, the tires squealed slightly but maintained perfect traction, a testament to the vehicle's advanced suspension system. The roar of the engine echoed through the valley, announcing its presence to the world. Passing trees and rocks blurred into a green and gray streak, creating a sense of exhilarating speed. With each shift of the gears, the car surged forward, effortlessly eating up the miles. The smell of burning rubber mixed with the crisp mountain air, making the drive feel like a symphony of power and precision. This car was not just a machine; it was a work of art on wheels, designed to dominate the open road.",
  },
  {
    header: "TOYOTA PSL",
    link: "/assets/images/black.png",
    paragraph: "The family SUV cruised steadily down the highway, its spacious interior providing a quiet and comfortable ride. Soft music played in the background as the children in the backseat chatted excitedly about their upcoming vacation. The driver adjusted the temperature with a tap on the touchscreen, enjoying the feel of the ventilated leather seats on a warm day. The large panoramic sunroof let in natural light, giving the cabin an open, airy feel. Passing other vehicles, the SUV’s powerful engine hummed confidently, while its advanced safety features, like lane-keeping assist, made the journey feel secure. A voice notification from the navigation system alerted them to a slight detour ahead, but the driver remained relaxed, trusting the vehicle's adaptive cruise control to handle the speed adjustments. The digital dashboard displayed everything from fuel efficiency to weather conditions, all within easy reach. The SUV handled a mild curve with ease, its suspension absorbing the slight bumps in the road. Every aspect of the drive felt smooth and refined, a perfect balance of utility and luxury. This was the kind of vehicle built for long road trips, making each mile feel effortless.",
  },
]


console.log(structure.link)

function createPage(numDict) {
    document.querySelector("#forImg").setAttribute("src", structure[numDict].link);
    document.querySelector("h3").innerHTML = structure[numDict].header;
    document.querySelector("p").innerHTML = structure[numDict].paragraph;
    document.querySelector(".logo").innerHTML = structure[numDict].header;
}

document.addEventListener("DOMContentLoaded", function () {

  let numDict = localStorage.getItem("struct");

  createPage(numDict);
});
