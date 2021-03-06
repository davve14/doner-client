<template>
    <div class="about">
        <v-container style="max-width: 960px;">
            <h1 class="headline">About The Berlin Döner Database</h1>
            <p>
                My name is Professor Imbiss, I am a Döner connoisseur and I want to tell you about our project, The
                International Berlin Döner Database.
            </p>
            <p>
                The Döner or Kebab or Gyros or simply ”meat and/or veggeis in a Sandwich” is a dish common in
                the urban landscape of Berlin. Where the concept of Döner starts and stops is hard these days since
                the concept entails several different components by this point. But let's start at the beginning.
            </p>
            <p>
                Döner or Döner kebab is traditionally a Turkish dish made up of meat cooked on a rotisserie (slow
                grill). The type of meat and composure of the meat can vary. The exact differences between Döner,
                Gyros or Schawarma kebab are not as easy to detail as one may think. Usually, Gyros tends to go
                with tzatziki and Schawarma tends to pertain to minced and seasoned meat.
            </p>
            <p>
                So, dear reader, in my opinion it's mostly a matter of semantics and regional preferences. For the
                sake of this interactive blog, however, we'll focus on Döner and how Professor Imbiss (yours truly)
                perceives this term is used in Berlin.
            </p>
            <p>
                Alright, got lost a bit there. So, traditionally Döner kebab is meat cooked rotisserie-style on a
                skewer. The meat is then cut off the skewer into thin, crisp shavings. The thin shavings can then be
                used in a variety of dishes. This is where we get back to Berlin. The most common street food in
                Berlin is probably the Döner im Brot (which is German for deliciousness... oh, and ”Döner in
                bread”). The bread is most commonly the Fladenbrot, according to my studies.
            </p>
            <p>
                The combination of the meat and the bread makes a delicious sandwich which no human being can
                claim to have lived a life without having tasted. It's simple and it's delicious. And it can be even
                better. I guess this is one of the major drivers for us here at the International Berlin Döner
                Database:
                to probe the Döner makers of the world to even greater heights through the Internet's informational
                powers.
            </p>
            <p>
                The Imbiss is a German concept and it's a small restaurant. Sometime little more than a hot dog
                stand, sometimes closer to a restaurant. What they have in common is a tasty (hopefully) meal for a
                small amount of cash. It is, in essence, a tasty treat for a tiny sum.
            </p>
            <p>
                At the International Berlin Döner Database we believe there's something particularly beautiful
                about making delicious meals at affordable prices. This is why we've choosen to applaud this
                specific type of food outlet.
            </p>
            <p>
                Last but certainly not least, Döner is traditionally a meat dish. In recent years the concept of
                ”Döner” has broadened and now includes vegetarian options, which we also applaud at the
                International Berlin Döner Database. I, Professor Imbiss, has great concerns for several things at the
                same time: your tastebuds, your stomach, your wallet
                and
                the planet. Now, these are not mutually
                exclusive. There's nothing wrong with having a tasty Veal döner. B
                UT, please remember there's
                nothing un-tasty with having a vegetarian option at class-acts like Zweistrom or Vöner.
            </p>
            <h1 class="headline">About the structures of a Döner and meat varieties</h1>
            <p>
                Since the definitions of what is a Döner kebab can vary so very much, we had a workshop here at
                the International Berlin Döner Database and came up with a couple of categories that make the
                description of the dishes easier. You can read all about it right here!
            </p>
            <h2 class="title">Veal Döner</h2>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    The Veal döner pivots around the veal meat, which, in turn, pivots around a skewer while being
                    cooked rotisserie style. The meat is later carved off in thin shavings and put inside a sandwich
                    together with vegetables (usually some combination of tomatoes, cucumber, onions, lettuce and
                    cabbage), sauces (traditionally kräuter (herbs), knoblauch (garlic) and scharf (hot)) and a bread
                    (usually Fladen brot (thicker) or dürüm (thinner)).
                    Veal is the meat from the calf, aka the baby cow. The meat from the mama and the papa cow is
                    called beef. Veal Döner meat is usually chunks of meat – sorta like steaks – piled onto each other,
                    seasoned, and grilled rotisserie-style (ie slowly). The meat is then carved out from the
                    cylindrical
                    tower of steaks in thin shavings.
                    <br><br>
                    Cooking the meat in this way, and with just the right touch, can turn out to be an unprecedented
                    meat experience where the meat is juicy and strong in flavor. Generally, the best Döners follow
                    this
                    tradition. Leading examples are Doyum Döner, Pamfilya and Tadim. There are plenty of other
                    choices, so make sure to do your reserach properly before making a spontaneous street dinner
                    reservation. Luckily you have come to the right place, as you can do this research right here!
                </v-flex>
                <v-flex xs12 md6>
                    <figure class="figure_wrapp">
                        <v-img :src="require('@/assets/tadim_spett.png')" width="400" aspect-ratio="1" alt="Tadim Döner">
                        </v-img>
                        <figcaption><router-link to="/restaurant/1">Tadim</router-link> - Veal Döner in Berlin Kreuzberg</figcaption>
                    </figure>
                </v-flex>
            </v-layout>
            <h2 class="title">Mârten Döner</h2>
            <p>
                The Mârten Döner is named after the traditional autumn festivities in Värmland, a province in
                western Sweden. It is named so because the Döner meat is, as it is with the Döner meat offered by
                the travelling traders present at these festivities, made out of a pressed, minced-meat, hot-dog
                cylinder. This meat is generally also referred to as Veal, albeit this is hard to prove and sometimes
                hard to believe. The quality of the meat of the Döner peddlers can vary greatly – where some can be
                quite tasty and others can be pretty disgusting.
                <br>
                The Döner meat is – in contrast to the Veal Döner – ground to mince meat and processed in unclear
                ways to form a cylinder of compact pressed meat. This meat is later carved out into longer shavings,
                put into a bread together with the veggies and the sauce (as described above).
                Given the limitations of the type of meat involved it is traditionally harder for the Mârten Döner
                imbisses to reach any higher culinary levels. We have never seen anyone reach any higher level
                than three in our system. That being said, there's nothing wrong with a tasty Mârten Döner,
                particurly when waking up parched after a heavy night of drinking. The fatty meats will deliver the
                salt your body craves! But please do your research beforehand.</p>
            <h2 class="title">Chicken Döner</h2>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <figure class="figure_wrapp">
                        <v-img :src="require('@/assets/ruya_spett.png')" width="400" aspect-ratio="1" alt="Tadim Döner">
                        </v-img>
                        <figcaption><router-link to="/restaurant/6">Rüya Gemüse Kebab</router-link> - Chicken Döner in Berlin Schöneberg</figcaption>
                    </figure>
                </v-flex>
                <v-flex xs12 md6>
                    The Chicken Döner consists of chicken filets on a skewer cooked rotisserie style. Since chicken
                    lacks the fat levels the Veal option have, Chicken Döner makers often spice up the skewer with
                    vegetables and a more aggressive seasoning. The lesser fat also maintain the illusion of the
                    chicken
                    alternative as a more healthy as compare to the cow combos. No one at IBDD are really sure about
                    the science about that though.
                    <br><br>
                    The Chicken Döner comes in many forms. Worth noting is the trend seen in latter years
                    spearheaded by the likes of Mustafa and Rüyam. This trend flows from a line of thinking which
                    seems to encourage a certain kind of inventiveness and has enriched the Döner-society with a
                    couple of new influences like adding spice and oil to the meat, adding roasted veggies, sprinkles
                    of
                    turkish feta cheese and some sour lemon.
                </v-flex>
            </v-layout>
            <br>
            <h2 class="title">Falafel</h2>
            <p>
                Falafel is 100% vegan and consists of a deep fried ball of chick peas, fava beans or both. It's a
                traditional middle-eastern food which traces its origin back to Egypt from where it migrated north
                to the Levant and later spread its tastiness across the world.</p>
            <p>
                The beans are prepared and later mixed with other components like, for example, scallions, garlic
                and parsley. A variety of spices like celantral or cummin are added. The balls are then added to a
                sandwich together with an assortment of other vegetables and some usually very delicous sauces.
                Dear potential reader, we must issue a warning about falafel. A lot imbisses don't really prepare
                falafels properly but simply procure them from Lidl or other less authentic sources. These ones are
                with very few exceptions really goddamn terrible. What you desire – and what we want to help you
                with – is to find the one which prepare the Falafel themselves. These ones are superior in every
                respect.</p>
            <p>
                Falafel isn't really Döner since that is, as previously discussed, meat cooked slowly on a skewer and
                Falafel isn't even meat. Falafel is, however, a lovely tasty dish supplied by several imbisses and that
                is what matters to us. Try, for example, Zweistrom.</p>
            <h2 class="title">Veggies</h2>
            <p>
                Veggie Döners can take about any shape. I mean, in part the Falafel is a vegetarian type of
                vegetarian Döner. But that type of sandwich has been honored with its own category. So here we'll
                look into other, often innovative, versions of the Döner sandwich. Like our friends down at Vöner.
                Brilliant.
            </p>
        </v-container>
    </div>
</template>
<style>
.figure_wrapp {
    padding: 5 px;
}
</style>
