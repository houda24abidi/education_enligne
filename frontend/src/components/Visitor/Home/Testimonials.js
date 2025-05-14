import React from "react";

const testimonials = [
  {
    id: 1,
    content:
      "Cette plateforme a transformé ma façon d'apprendre. Les cours sont bien structurés et les projets pratiques m'ont permis de vraiment maîtriser les concepts.",
    author: "Chaouach Yasmine",
    role: "Étudiant en Informatique",
    image:
      "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/490843036_1394281315263792_5493801436693011115_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_HcycqP_1koQ7kNvwFlcbdO&_nc_oc=AdkKISMn9cyapFzRi5ag_VKTszWV9O7ezVqoDTrta8mmUmFP1fVNTaQK7E_F3YwhMkk&_nc_zt=23&_nc_ht=scontent.fnbe1-2.fna&_nc_gid=AYeRDNDPiOoZFbeCLBnPPQ&oh=00_AfH0GiS2RI6HZ6SlI3r83Fk1OkDx3ejFM8xpq8xZSm5J3g&oe=68020268",
  },
  {
    id: 2,
    content:
      "J'ai pu acquérir de nouvelles compétences en IA tout en travaillant à temps plein. La flexibilité et la qualité des cours sont exceptionnelles.",
    author: "Chaouach Arwa",
    role: "Développeur Web",
    image:
      "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/487768968_1203103027873828_3850652408733744786_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Vran-HnAHNcQ7kNvwFIk4i6&_nc_oc=AdkSi8EeVnAuFKDBfYXNd9BLMjjxtZ38yXAua-q6SH-jRGuaoofJm_66O6jPSe4ET-I&_nc_zt=23&_nc_ht=scontent.fnbe1-2.fna&_nc_gid=ImEbiX0AE60ds6vn1ZN49Q&oh=00_AfETcjlb6jUghZLSXRC3Jns-qs-AkHgM7hSkpX0WbPC11Q&oe=68021F58",
  },
  {
    id: 3,
    content:
      "La communauté est incroyablement active et solidaire. J'ai trouvé des mentors et des amis qui partagent ma passion pour les sciences.",
    author: "Abidi Houda",
    role: "Chercheur",
    image:
      "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/484924524_2401311710216707_7322815888982842686_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3T4PXrz3A60Q7kNvwESNtXs&_nc_oc=AdnIt7SSYD_I9mDGvafIk_dYYxhRvkbkwieo_oaPRcUF174AFiBUD9XjaVx5gF4C6u8&_nc_zt=23&_nc_ht=scontent.fnbe1-2.fna&_nc_gid=jhjGiwAgOdZSj5dGNUeP_Q&oh=00_AfHC3Hk4MijPgKY8hgGMLqMy6GMKnjDfm6YBSyiFvCPUbQ&oe=68020D98",
  },
  {
    id: 4,
    content:
      "Les cours sont très bien détaillés et j'ai pu améliorer mes compétences tout en collaborant avec des professionnels expérimentés.",
    author: "Ahmed Saidy ",
    role: "Designer UI/UX",
    image:
      "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/347249901_562251672729419_6936812620991376941_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WW9UifqbxrMQ7kNvwFCQ_tg&_nc_oc=AdnfLoslMN4pIzC4eUuiL5uRLLefz9vyycCOrznhKnHm3xKVSpxEHUY77YXvis-LJO4&_nc_zt=24&_nc_ht=scontent.fnbe1-2.fna&_nc_gid=m0Q23uUP9LIlbBRvl0K3Dg&oh=00_AfHvk0NhOS3qB8tlske0Cz-Z2-jktjuj4VC_wkM_MBBnig&oe=6801F044",
  },
  {
    id: 5,
    content:
      "La plateforme offre une grande diversité de sujets, et je peux étudier à mon rythme tout en obtenant des certifications reconnues.",
    author: "Dhiâ Omrani ",
    role: "Ingénieur Systèmes",
    image:
      "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/484548422_2052467028568995_2805142266067939555_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ZBsFxiNQ8WcQ7kNvwGh6Go0&_nc_oc=AdkzddO8u0Lt10ynqeKLqcU2t-dUDYHPBbkdbyvI8gqE_I1P5qXpSwa71RHq4S8kmak&_nc_zt=24&_nc_ht=scontent.fnbe1-2.fna&_nc_gid=S_e4_skf2ifzmjj6SP7czA&oh=00_AfG6o1hArq47cWbvHeCVQ-Be3dB4owkccKtFaXiOvuLlWg&oe=6801FC0C",
  },
  {
    id: 6,
    content:
      "J'ai trouvé de vrais défis dans les projets proposés et une grande richesse dans l'apprentissage des technologies modernes.",
    author: "Firas Ibdelli ",
    role: "Développeur Mobile",
    image:
      " https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/452622524_2250895795250909_1869355845548832976_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=4-kGHg3sbXQQ7kNvwHiasg4&_nc_oc=AdkclaUalVx1RX0uwR1FtHQim4s-uy-VoC7rWOQSS8DwDVqAPMLvfCpna7snGl1aEQs&_nc_zt=24&_nc_ht=scontent.fnbe1-2.fna&_nc_gid=Cpm3_LIJlpmjky_M7d3f1w&oh=00_AfGnwiTBpB4TEZHdqrNR8hWOfkR_kFEXY6LL_8YVGMFvTQ&oe=6802189E",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ce que disent nos étudiants
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Découvrez les expériences de ceux qui ont déjà rejoint notre
            communauté
          </p>
        </div>
        <div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="lg:col-span-1"
              data-aos="fade-up" // Ajouter AOS pour l'animation
            >
              <div className="h-full flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden p-8">
                <blockquote className="mt-6 text-gray-700">
                  <p className="text-lg font-medium">"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-8 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-base text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
