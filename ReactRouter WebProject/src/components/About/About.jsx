import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="Team working"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl leading-snug">
              Passionate Developers Crafting React Applications
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis
              voluptatem accusantium nemo perspiciatis delectus atque autem!
              Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
