generate_AberrantB = function(){
  const The_beast_looks_a_good_bit_like = ["A lizard", "An ape", "A lobster", "A bat", "An octopus", "A centipede", "A panther", "A crow", "A spider", "A fish", "A vulture", "A jellyfish"];
  const The_beast_has = ["Tentacles where you expect eyes", "A blind, jawed worm for a tongue", "A large single, lidless eye", "Several extra eyes", "Slime covering its body", "Small tentacles covering its body", "Dexterous tentacles it uses like hands", "An unpleasant, briny odor"];
  const and = ["Moves by floating eerily in air or water", "Moves by slithering or scuttling", "Can teleport in a swirl of shadows", "Can fade away and reappear elsewhere", "Shambles awkwardly across the ground", "Glides smoothly over the ground or water", "Mutters darkly to itself", "Whispers strange desires to mortals"];
  const The_beast_is_looking_for = ["A brain to devour", "A host to infect with its parasitic larva", "A mortal to enslave", "A mortal to present to its master", "An opportunity to overthrow its master", "Someone to lovingly caress"];
  const arrayOfArraysEnum ={The_beast_looks_a_good_bit_like,The_beast_has,and,The_beast_is_looking_for};
  const arrayOfArrays = [The_beast_looks_a_good_bit_like,The_beast_has,and,The_beast_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Arena = function(){
  const The_arena_is = ["An ancient stone structure used for centuries", "An old stone structure used for generations", "A wondrous construction with grand stands, trap doors, and elevators", "A sturdy wooden structure, recently built", "A crisp stone structure, recently built", "A set of rickety wooden stands around a dirt ring", "A circle of rope surrounded by spectators and a few cages", "An underground pit with spectators leaning over a railing above"];
  const The_games_are_being_held = ["In honor of the sovereign’s birthday", "In honor of a historical anniversary", "In honor of a recent military victory", "To turn a profit off admission sales", "To turn a profit off a gambling book", "To dispose of prisoners", "Strictly to entertain the masses", "To determine a champion for a dangerous quest or traditional ceremony"];
  const The_games_are_being_hosted_by = ["A tyrannical sovereign", "A benevolent sovereign", "A close ally of the sovereign", "A wealthy merchant or lord", "A council of wealthy merchants", "A mysterious high priest or mage"];
  const The_main_event_is = ["A battle royale or grand melee", "A reenactment of a historical battle", "A duel between two arena champions", "A duel between a champion and a severe underdog", "Feeding prisoners to beasts", "A battle of man versus beast INLIN", "A chariot race or foot race", "Feats of strength"];
  const A_battle_of_man_versus_beast = ["bears", "chimeras", "dragons", "giant spiders", "lions", "owlbears", "tigers", "wolves"]; 
  const The_day$$$s_champion_wins = ["A heavy purse of silver", "A sizable purse of gold", "An expensive and ornate weapon", "An expensive and ornate suit of armor", "A floral crown and a fine silver chain", "A floral crown and bejeweled gold belt", "A fine silk cloak and bejeweled silver chain", "A petition of the sovereign", "A position of honor in the army and a purse of silver", "A position of honor in the sovereign’s guard", "A week of pampering and pleasure and a purse of silver", "A night with one of the nobles’ wives and a purse of gold"];
  const The_crowd_is_made_up_of_mostly = ["Merchants, nobles, and the well-to-do", "Soldiers and camp-followers", "Local artisans and shopkeepers", "Local peasants and unskilled workers", "Foreigners and travelers", "Slave, servants, and laborers", "Sailors, pirates, and knaves", "People of all social strata"];
  const The_crowd$$$s_attitude_is = ["Rowdy and festive", "Eager and excited", "Relaxed and easy-going", "Hostile and tense", "Disappointed and angry", "Rowdy and rebellious"];
  const The_greatest_champion_ever_to_fight_in_this_arena_was = ["A masterful swordsman, with a slow mind", "A masterful swordsman, with a quick wit", "A hulking brute, with a gentle soul", "A hulking brute, with a nasty edge", "The survivor of a terrible disaster", "The survivor of a famous shipwreck", "The survivor of a wartime massacre", "The bastard son of a noble house", "A conquered prince or lord who was too proud to bend the knee", "Horribly disfigured and scarred", "Half-giant, and completely insane", "Half-fiend, and insanely cruel"];
  const arrayOfArraysEnum ={The_arena_is,The_games_are_being_held,The_games_are_being_hosted_by,The_main_event_is,The_day$$$s_champion_wins,The_crowd_is_made_up_of_mostly,The_crowd$$$s_attitude_is,The_greatest_champion_ever_to_fight_in_this_arena_was};
  const arrayOfArrays = [The_arena_is,The_games_are_being_held,The_games_are_being_hosted_by,The_main_event_is,The_day$$$s_champion_wins,The_crowd_is_made_up_of_mostly,The_crowd$$$s_attitude_is,The_greatest_champion_ever_to_fight_in_this_arena_was];
  const arrayOfInlinesEnum ={A_battle_of_man_versus_beast};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_ArmorerCamp = function(){
  const The_armorer_is = ["A meticulous armorsmith", "A blacksmith with some militia experience", "A blacksmith with some militia experience", "A farrier with little experience with weapons", "A farrier with little experience with weapons", "A highly-skilled weaponsmith"];
  const The_armorer_is_looking_for = ["A new apprentice or a journeyman assistant", "A new apprentice or a journeyman assistant", "Rare metals", "Rare metals", "Dull blades to sharpen", "A mug of strong ale"];
  const The_armorsmith_carries = ["A hammer", "A hammer", "A metal trinket made by the armorer", "A contract for a set of special plate armor", "A contract for a set of special plate armor", "Little more than a few coins"];
  const arrayOfArraysEnum ={The_armorer_is,The_armorer_is_looking_for,The_armorsmith_carries};
  const arrayOfArrays = [The_armorer_is,The_armorer_is_looking_for,The_armorsmith_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_ArtisanApprentice = function(){
  const The_artisan_has_the_experience_of_ = ["A young journeyman", "A mediocre journeyman", "A skilled journeyman", "A veteran of the craft", "A master of the craft", "An old crafter"];
  const The_artisan_has = ["A friendly smile", "Keen eyes", "Watery eyes", "A stubborn scowl", "A dour frown", "A missing tooth", "Tired eyes", "An amused smirk"];
  const The_artisan_also_has = ["A limp", "A hunchback", "Unsteady hands when they aren’t at work", "A habit of looking down", "A bulbous nose", "A burn scar on the face", "A wispy mustache and/or a patchy beard.", "A thick mustache and/or a bushy beard"];
  const The_artisan_is_highly_skilled_at = ["Crafting one particular type of item", "Identifying high quality raw materials", "Putting the finishing touches on an item", "Instructing and training apprentices", "Negotiating better prices for goods", "Maneuvering in guild politics"];
  const The_artisan_is_looking_for = ["A new apprentice", "A journeyman craftsman to hire", "Rare materials", "A better set of tools", "Someone with whom to talk shop", "Someone who attended a sporting event", "Someone to deliver a sensitive letter", "A mug of strong ale"];
  const The_artisan_is_carrying = ["The tools of his or her trade", "Some raw materials", "A finished product", "A little coin", "A to-do list scrawled on a bit of parchment", "A set of many keys", "A pipe and some tobacco", "A flask of whisky"];
  const The_artisan_is = ["A well-known member of the guild", "An established or up-and-coming leader in the guild", "A new member of the guild, having recently relocated from a distant land", "A quiet guildmember, who doesn’t get involved in guild politics", "On the outs with guild leadership", "A favorite of some of the guild’s leaders"];
  const The_artisan_dreams_of = ["Producing a masterwork of the craft", "Holding the reins of guild leadership", "Retiring peacefully", "Retiring rich", "Running away from it all", "A life of adventure"];
  const Presently_the_apprentice_is = ["Nervous", "Panic-stricken", "Content", "Eager to learn", "Irritable", "Frustrated by errors"];
  const The_apprentice_is_seeking_someone_to = ["Give him some tips in the craft", "Purchase an item made by the apprentice", "Sell him an item to resell as his own work", "Listen to complaints about his master", "Tell a tale that inspires creativity", "Sneak off for a drink and some kisses"];
  const arrayOfArraysEnum ={The_artisan_has_the_experience_of,The_artisan_has,The_artisan_also_has,The_artisan_is_highly_skilled_at,The_artisan_is_looking_for,The_artisan_is_carrying,The_artisan_is,The_artisan_dreams_of,Presently_the_apprentice_is,The_apprentice_is_seeking_someone_to};
  const arrayOfArrays = [The_artisan_has_the_experience_of,The_artisan_has,The_artisan_also_has,The_artisan_is_highly_skilled_at,The_artisan_is_looking_for,The_artisan_is_carrying,The_artisan_is,The_artisan_dreams_of,Presently_the_apprentice_is,The_apprentice_is_seeking_someone_to];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Assassin = function(){
  const The_assassin_is = ["A veteran hitman", "A desperate footpad", "A reckless fortune seeker", "A well-known slayer", "A brash, young fool", "A student of the craft", "A charismatic butcher", "A mysterious foreigner", "A femme fatale", "A charming rogue", "A dashing swashbuckler", "A brutish thug"];
  const The_assassin_has = ["A scar on the forearm", "A scar on the face", "A high-pitched laugh", "A long, hooked nose", "A dangerous look in the eye", "A cheerful smile", "A cold stare", "An agile step", "A low-cut shirt", "A bent, broken nose", "A cute little button nose", "A scar below the left eye", "Pockmarked cheeks", "High cheek bones", "A pointy chin", "A thug's tattoo INLINE", "A sailor's tattoo INLINE", "An open shirt and a very hairy chest", "A five o'clock shadow", "A neatly trimmed mustache"];
  const A_thug$$$s_tattoo = ["crossed bones", "dagger", "dragon", "eagle", "skull", "snake", "spider web", "thorns"]; 
  const A_sailor$$$s_tattoo = ["anchor", "fish", "mermaid", "octopus", "shark", "whale"]; 
  const The_assassin_wears = ["A flashy earring", "Shiny leather boots", "A gold signet ring", "A dagger in each boot", "A mask covering the face", "A wide-brimmed hat", "A cloak with a dark hood", "A black traveler's cloak", "A bandolier containing vials of poison", "A quiver full of arrows/bolts", "A dark red cape", "Boots with golden buckles", "A leather baldric", "A handkerchief tied over the head", "A small silver chain around the neck", "A long dark ponytail", "Luscious brown curls", "A ruffled shirt", "A black leather coat", "A handkerchief in the breast pocket"];
  const The_assassin_is_looking_for = ["Accomplices to help complete a job", "Revenge against a rival assassin", "An easy contract", "Extra muscle for a tough assignment", "Rumors that may lead to a new client", "Word from a missing guild contact", "Someone to frame up for a murder", "Revenge against a double-crossing client", "A big payday", "A rowdy evening of carousing"];
  const The_assassin_wields = ["A blade with a gem embedded in the pommel", "A blade with soft leather tassels dangling from the pommel", "A blade with a carved hilt INLINE", "A blade with a gently curved hilt", "A blade with beasts engraved in the guard INLINE", "A blade made of blackened steel", "A highly polished blade", "A blade with strange runes carved into it", "A blade with a serrated edge", "A curved, exotic blade"];
  const A_blade_with_a_carved_hilt = ["ivory", "jade", "soapstone", "ebony", "mahogany", "oak"]; 
  const A_blade_with_beasts_engraved_in_the_guard = ["dragons", "lions", "scorpions", "snakes", "spiders", "wolves"]; 
  const The_assassin_also_carries = ["Several throwing knives", "An array of poisons in stoppered vials", "Several doses of a deadly poison", "A blowgun with poisoned darts", "An over-sized crossbow", "Arrows/bolts tipped with black steel", "Arrows/bolts with bronzed tips", "Arrows/bolts fletched with crow feathers", "Arrows/bolts fletched with peacock feathers", "Arrows/bolts coated in poison", "Some hemp rope and a silk handkerchief", "A pocketbook of notes and maps", "Climbing gear—pitons, hammer, and rope", "A mask", "The token of a love", "Letters for blackmail", "A lucky charm INLINE", "A flask filled with spirits", "A wineskin", "A little jar of mustache wax"];
  const A_lucky_charm = ["rabbit's foot", "lucky coin", "horseshoe", "four-leafed clover"]; 
  const The_assassin_prefers_to_operate = ["Alone", "Alone, but with a contact’s knowledge.", "With a partner to provide extra muscle", "With a partner to serve as a look-out", "With a partner to create a diversion", "Wearing a mask"];
  const Recently_the_assassin_is_rumored_to_have_notched_a_kill_in_or_near_a_or_an_or_the = ["Inn", "Residential district", "Brothel", "Workshop or guildhall", "Cemetery", "Merchant's office", "Town hall", "Warehouse or shipyard", "Palace", "A temple complex", "Bridge", "Abandoned warehouse", "Pub", "Noble’s residence", "Tavern", "Library or university", "Docks", "Gatehouse or barracks", "Bridge", "Market square"];
  const The_assassin_is_rumored_to_have_killed_a_or_an_or_the = ["Merchant", "Lord or lady", "Politician", "King or queen", "Crime boss", "Prince or princess", "Warlord", "Priest or priestess", "Sea captain", "Heretic or prophet"];
  const The_poison_will_cause_or_induce = ["Wounds to bleed more profusely", "A splitting headache", "Aches all over the body", "Infection in and near open wounds", "Fever and chills", "Airway constriction or shortness of breath", "Excess mucus production, making breathing difficult", "Blurry vision or blindness", "A painful rash", "Itchy hives", "Loss of coordination and/or impaired walking", "Weakness in limbs and/or exhaustion", "Nausea and/or indigestion", "Vomiting and/or diarrhea", "Drowsiness and/or loss of consciousness", "Memory loss", "Inability to focus and/or to think clearly", "Nightmares and/or hallucinations", "Paranoia and/or insomnia", "Impotence, infertility, or miscarriage"];
  const The_poison_is = ["A thick paste", "A thin paste", "A flaky powder", "A fluffy powder", "Made of fine crystals", "Made of coarse crystals", "A pungent potion", "A fragrant potion", "An odorless potion", "A foul-smelling potion", "An oily liquid", "A thick, gloopy liquid"];
  const The_poison$$$s_colour_is = ["Pale green", "Dark green", "Blue green", "Olive green", "Yellow", "Red", "White", "Grey", "Brown", "Black", "Blue", "Violet"];
  const The_main_ingredient_is_harvested_from = ["A flower", "A spider", "A fruit", "A snake", "A mold", "A centipede or scorpion", "A leaf", "A frog or lizard", "A grass", "A jellyfish or coral", "Mushrooms", "A medusa or naga", "A root", "An otyugh or ooze", "A seed", "A drider or ettercap", "A tree bark", "A basilisk or cockatrice", "A mineral", "A demon or devil"];
  const The_poison_is_prepared_by = ["Desiccating", "Boiling slowly", "Fermenting", "Boiling rapidly", "Roasting", "Brining", "Smoking", "Burning"];
  const The_poison_is_most_effective_when = ["Ingested with food", "Ingested with alcohol", "Inhaled deeply", "Spread over a large area of the skin", "Applied to a weapon that pierces the flesh", "Applied to a weapon that slashes the flesh"];
  const The_antidote_to_the_poison_is = ["A simple herbal remedy", "A complex herbal potion or salve", "A widely available healing potion or balm", "An intricate alchemical concoction", "No known earthly substances", "Rare and powerful magic"];
  const arrayOfArraysEnum ={The_assassin_is,The_assassin_has,The_assassin_wears,The_assassin_is_looking_for,The_assassin_wields,The_assassin_also_carries,The_assassin_prefers_to_operate,Recently_the_assassin_is_rumored_to_have_notched_a_kill_in_or_near_a_or_an_or_the,The_assassin_is_rumored_to_have_killed_a_or_an_or_the,The_poison_will_cause_or_induce,The_poison_is,The_poison$$$s_colour_is,The_main_ingredient_is_harvested_from,The_poison_is_prepared_by,The_poison_is_most_effective_when,The_antidote_to_the_poison_is};
  const arrayOfArrays = [The_assassin_is,The_assassin_has,The_assassin_wears,The_assassin_is_looking_for,The_assassin_wields,The_assassin_also_carries,The_assassin_prefers_to_operate,Recently_the_assassin_is_rumored_to_have_notched_a_kill_in_or_near_a_or_an_or_the,The_assassin_is_rumored_to_have_killed_a_or_an_or_the,The_poison_will_cause_or_induce,The_poison_is,The_poison$$$s_colour_is,The_main_ingredient_is_harvested_from,The_poison_is_prepared_by,The_poison_is_most_effective_when,The_antidote_to_the_poison_is];
  const arrayOfInlinesEnum ={A_thug$$$s_tattoo,A_sailor$$$s_tattoo,A_blade_with_a_carved_hilt,A_blade_with_beasts_engraved_in_the_guard,A_lucky_charm};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Bard = function(){
  const The_bard_is = ["A talented singer", "A graceful dancer", "A virtuoso musician", "A captivating storyteller", "A brilliant poet", "A scholar of history", "A serious actor", "A dashing swashbuckler", "A wise-cracking magician", "A bold knife-thrower", "A slippery con artist", "A lovable jack-of-all-trades", "A duplicitous spy", "A witty satirist", "A gracious knight", "An enchanting dancer", "A mysterious foreigner", "A rowdy jester", "A master of riddles", "A terrible singer"];
  const The_bard_carries_his_or_her = ["Lyre", "Bagpipes", "Mandolin", "Bells", "Ocarina", "Castanets", "Panpipes", "Cymbals", "Shawm", "Drum", "Tabor", "Fiddle", "Tambourine", "Flute", "Trumpet", "Harmonica", "Viol", "Harp", "Zither", "Lute"];
  const The_instrument_is = ["A gift from a wealthy patron", "A family heirloom", "Very old, but well maintained", "An old, worn-out thing", "In need of some repair", "Always out-of-tune", "Decorated with gold", "The product of a master craftsman", "Something the bard made", "The instrument of a legendary bard"];
  const The_bard_wields = ["Several sharp daggers", "A lightweight saber", "A finely-crafted shortsword", "A longsword and a good luck charm", "Some well-balanced throwing knives", "A quick-winding crossbow", "A bow of elvish make", "A shortsword of dwarvish make", "A heavy wooden staff", "A dagger in each boot", "A book of hexes and curses", "Quick wits and a gift for lying"];
  const The_bard_also_carries = ["A compromising love letter", "A lacy favor from a maiden", "Some parchment with half-finished poems", "Some faded sheet music", "A silk handkerchief", "The key to well-guarded treasure chest", "A bundle of old books", "An alchemy kit and several potions", "A pocket field guide to local herbs", "A faded old map", "A tome of legends and historical lore", "A jar of mustache wax"];
  const The_bard_is_wearing = ["Tight-fitting pants", "A low-cut shirt", "A revealing set of breeches", "A traveler’s cloak", "A heavy peddler’s pack", "A wide-brimmed hat with a large exotic feather INLINE", "Shiny boots made from an exotic hide INLINE", "A coat made from an exotic hide INLINE", "A large golden necklace", "Flashy earrings", "Dancing shoes", "Too much perfume"];
  const A_widebrimmed_hat_with_a_large_exotic_feather = ["cockatrice", "giant eagle", "giant owl", "griffon", "hippogriff", "ostrich ", "peacock", "phoenix", "roc", "shadowraven"]; 
  const Shiny_boots_made_from_an_exotic_hide = ["basilisk", "crocodile", "demonskin", "ragonscale", "drake", "flamesnake", "wyvern"]; 
  const A_coat_made_from_an_exotic_hide = ["ragonscale", "leopard", "owlbear", "tiger", "zebra"]; 
  const The_bard_has = ["A silver tongue", "A gift for satire and wit", "A beautiful face", "Incredibly good looks", "An easy smile", "A graceful manner", "A polite gentility", "Impeccable manners", "A foul mouth", "A hearty laugh", "An alluring quality", "A handsome mustache"];
  const The_bard_is_looking_for = ["A new tale to tell", "Inspiration for a song", "A beautiful muse", "Someone to repair a musical instrument", "A catchy melody", "Experimental harmonies", "An edgy dance move", "A word that rhymes with hippopotamus", "New styles of poetry", "A legendary artifact", "A hero to immortalize in song", "A night of drinking and merrymaking"];
  const The_bard_is_a_big_hit_among = ["Fishermen, sailors, and pirates", "Farmers and herders", "Miners and travelers", "Guards, soldiers, and sellswords", "Members of the nobility", "Young children", "Idealistic youths", "Serving girls, slaves, and harlots", "Pretty young maidens", "Lonely wives"];
  const The_bard_tells_of_a_recent_visit_to = ["A wild mountain", "A royal court", "A legendary tomb", "A distant castle", "A great tournament", "A frightening lair", "A dark prison cell", "A foreign land", "A grand festival", "A witch’s home", "A haunted castle", "A savage land"];
  const arrayOfArraysEnum ={The_bard_is,The_bard_carries_his_or_her,The_instrument_is,The_bard_wields,The_bard_also_carries,The_bard_is_wearing,The_bard_has,The_bard_is_looking_for,The_bard_is_a_big_hit_among,The_bard_tells_of_a_recent_visit_to};
  const arrayOfArrays = [The_bard_is,The_bard_carries_his_or_her,The_instrument_is,The_bard_wields,The_bard_also_carries,The_bard_is_wearing,The_bard_has,The_bard_is_looking_for,The_bard_is_a_big_hit_among,The_bard_tells_of_a_recent_visit_to];
  const arrayOfInlinesEnum ={A_widebrimmed_hat_with_a_large_exotic_feather,Shiny_boots_made_from_an_exotic_hide,A_coat_made_from_an_exotic_hide};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_BeastshifterLycan = function(){
  const The_beastshifter_transforms_into = ["A leopard", "A badger", "A lion", "A bat", "An owl", "A cat", "A panther", "A crocodile", "A raven", "A dog", "A seal", "A dolphin", "A serpent", "A fox", "A shark", "A hyena", "A spider", "A jackal", "A swine", "A jaguar"];
  const The_beastshifter$$$s_favorite_prey_are = ["Foreigners and travelers", "Beggars and drunks", "Young men", "Young women", "Old women", "Old noblewomen", "Priests and monks", "Priestesses", "Harlots and madames", "Farmwives and peasant girls", "Young children", "Rabbits and hares", "Squirrels and chipmunks", "Pheasants and other gamefowl", "Ducks and other waterfowl", "Mice and rats", "Pigeons and doves", "Sheep and goats", "Chickens and turkeys", "Dogs and cats"];
  const arrayOfArraysEnum ={The_beastshifter_transforms_into,The_beastshifter$$$s_favorite_prey_are};
  const arrayOfArrays = [The_beastshifter_transforms_into,The_beastshifter$$$s_favorite_prey_are];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Brothel = function(){
  const The_locals_call_this_place_the = ["Cozy", "Dancer's", "Golden", "Maiden's", "Lacy", "Lady's", "Lighted", "Lover's", "Night's", "Pink", "Porcelain", "Red", "Satin", "Shining", "Silky", "Silver", "Softest", "Sweetest", "Warmest", "Welcoming"];
  const Cont_ = ["Candle", "Cherry", "Curtain", "Doll", "Door", "Embrace", "Glove", "Heart", "House", "Lamp", "Kiss", "Peach", "Purse", "Room", "Slipper", "Shoe", "Skirt", "Stocking", "Veil", "Window"];
  const The_brothel_is_located = ["In the slums", "In a shantytown", "In a well-to-do residential neighborhood", "In the docks district", "In the riverfront district", "In the barracks district", "In an alley off a foreign bazaar", "In an alley off the main market square", "In the shadow of a temple", "Above a boisterous tavern", "Behind a tavern teeming with criminals", "Adjacent to a tavern full of gamblers", "Underground", "Outside the walls of the city or on the outskirts of a town", "At the base of a wizards’ tower", "In cave that had been a monster’s lair", "Above an inn on a busy trading route", "In the basement of a tavern", "On a street with many other brothels", "In a house in a park, garden, or forest"];
  const In_addition_to_the_$$$usual$$$_amusements_here_you_can_procure = ["Really weird stuff, for those with the most interesting fetishes", "Illegal stuff. If this is found out, the place would be burnt down, and the owners hung - It is clearly kept in great secret", "Performances involving food", "An outlet to live out violent fantasies", "Exotic races", "The most beautiful women and men, not just a claim, it’s the gods’ honest truth", "An all-inclusive lump-sum deal—all the harlots, food, and drink you can handle", "The sale of mind-altering drugs", "Stuff with exotic/magical ingredients, potions, etc", "Magical delights"];
  const The_place_is_run_by = ["A collective of the inmates themselves", "A mean old madam", "A large madam with a no-nonsense attitude", "A warm motherly figure", "A surly brute", "A tyrannical and cruel fellow", "A sultry seductress", "A charming witch"];
  const To_eat_the_place_serves = ["Simple snacks", "Banquets", "Peasant food", "Food hand-fed to you by a harlot", "Exotic delights", "Spicy treats", "Simple food", "Sweets and delicacies", "Grubby, poorly made meals", "All you can eat buffets", "Simple stew and bread", "Nothing; it satisfies other appetites"];
  const To_drink_the_place_serves = ["Ales", "Grog, and nothing but grog", "Cocktail", "Cheap wines", "Mead", "The finest wines and champagnes", "Lagers", "Nothing; inebriation is not tolerated"];
  const People_talk_they_say = ["The girls are underpaid and poorly treated", "Nothing really; it’s a neighborhood brothel", "A prominent noble or merchant is a regular", "The goddess of love and fertility blessed this place and all her followers must visit", "The usual stuff; a new girl is making a stir", "Once a month it offers discounted services", "It is secretly the home to a dark cult", "All the inmates there are related", "Nothing much, a popular girl is with child", "You can pay for services with things other than coin INLINE"];
  const You_can_pay_for_services_with_things_other_than_coin = ["contract work", "criminal favors", "goods", "religious services", "secrets", "stock"]; 
  const People_talk_about_this_place_rumors_suggest_that_recently = ["A nobleman got one of the girls with child but refuses to acknowledge her or the baby", "Someone slaughtered half of the workers and clients in the night", "A client was stabbed with a letter opener", "A man claiming to be a paragon of the god of law visited the place", "A group of outraged townsfolk has started protesting outside of the brothel, disgusted with what it does", "The oldest patron, who visited the brothel every day for the last fifty years has died, a day of mourning and celebration, along with a lavish funeral is being held for him", "One of the inmates was strangled", "One of the inmates has fallen madly in love with a client, but he or she is married", "A sinkhole has appeared in the basement, no one can see the bottom, and the boss worries it might grow and do more damage", "Several clients have caught a disease"];
  const This_room_has = ["A four-poster bed with velvet curtains", "A four-poster bed with lacy curtains", "A soft, leather chaise lounge", "A plush, pink chaise lounge", "A large pile of pillows with soft tassels", "A large pile of pillows with frilly edges", "A table with fruit and wine set upon it", "A table with perfumes and oils set upon it", "A large mirror against one wall", "A large mirror on the ceiling over the bed"];
  const You_notice = ["The scent of lavender", "The scent of lilac perfume", "The scent of ginger and cinnamon", "The scent of roses", "Scented candles", "The soft red glow from a shaded lamp", "A lamp burning dimly", "A statue of two figures kissing", "A statue of two figures coupling", "A statue of a nude woman bathing", "A painting of several nudes bathing", "A painting of a pair of lovers", "A curtain of beads", "A silky curtain", "A plush carpet beneath your feet", "A thick fur carpet beneath your feet", "The sound of distant, soft music", "The sound of furniture creaking nearby", "A lengthy, shrill scream", "A long moan"];
  const arrayOfArraysEnum ={The_locals_call_this_place_the,Cont_,The_brothel_is_locatedIn_addition_to_the_$$$usual$$$_amusements_here_you_can_procure,The_place_is_run_by,To_eat_the_place_serves,To_drink_the_place_serves,People_talk_they_say,People_talk_about_this_place_rumors_suggest_that_recently,This_room_hasYou_notice};
  const arrayOfArrays = [The_locals_call_this_place_the,Cont_,The_brothel_is_locatedIn_addition_to_the_$$$usual$$$_amusements_here_you_can_procure,The_place_is_run_by,To_eat_the_place_serves,To_drink_the_place_serves,People_talk_they_say,People_talk_about_this_place_rumors_suggest_that_recently,This_room_hasYou_notice];
  const arrayOfInlinesEnum ={You_can_pay_for_services_with_things_other_than_coin};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_CampFollower = function(){
  const The_traveler_is = ["A harlot", "A healer", "A minstrel or storyteller", "A peddler", "A preacher", "A refugee"];
  const The_traveler_is_seeking = ["To find a long lost friend or family member", "To find a long lost friend or family member", "To escape from a troubled past", "To gain revenge against a bitter rival", "To survive the war and start over", "To survive the war and start over"];
  const Goal_Tonight_the_traveler_is_looking_for = ["A little company", "A little company", "An opportunity to earn some coin", "An opportunity to earn some coin", "Someone to hear a sad tale", "Drinking companions"];
  const arrayOfArraysEnum ={The_traveler_is,The_traveler_is_seeking,Goal_Tonight_the_traveler_is_looking_for};
  const arrayOfArrays = [The_traveler_is,The_traveler_is_seeking,Goal_Tonight_the_traveler_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Caravan = function(){
  const The_caravan_is = ["A wagon train", "A long train of pack animals", "A train of pack animals with a few carts", "A train of pack animals with a few wagons", "A train of pack animals and livestock", "Traveling on foot with a few pack animals"];
  const The_caravan$$$s_pack_animals_are = ["One-humped camels", "Two-humped camels", "Large draft horses", "Reliable garrons", "Sure-footed ponies", "Mules", "Oxen", "Exotic beasts INLINE"];
  const Exotic_beasts = ["bison", "drakes", "elephants", "elk", "giant lizards", "zebras"]; 
  const The_caravan_is_transporting = ["Cloth INLINE", "Drugs or contraband", "Gems INLINE", "Metals INLINE", "Spices and teas", "Wine and spirits"];
  const Cloth = ["cotton, ", "linen", "silk, ", "wool"]; 
  const Gems = ["diamond", "jade", "ruby", "emerald", "obsidian", "opal", "pearl", "sapphire", "topaz", "turquoise"]; 
  const Metals = ["arsenic", "copper", "gold", "lead", "silver", "tin"]; 
  const The_caravan$$$s_mood_is = ["Desperate; a calamity has befallen them", "Foul; morale is bad, provisions are low", "Foul; morale is bad, provisions are low", "Tired; the journey is long and longer yet", "Tired; the journey is long and longer yet", "Eager; great riches await at journey’s end"];
  const The_captain_is = ["A mysterious foreigner", "A career soldier", "An outcast from a prominent family", "A celebrated explorer", "A femme fatale", "A charming rogue", "A dashing swashbuckler", "A brutish thug"];
  const The_captain_is_looking_for = ["Information regarding the route ahead", "The location of an ancient ruin", "Extra muscle for the journey", "News from the origin or destination", "Revenge against a bitter rival", "Ways to cheat the caravan’s owner", "Ways to speed up the caravan’s pace", "Drinking companions and storytellers"];
  const The_captain_wants_to_avoid = ["Other caravans", "Ruins and curses", "Thieves", "Barbarians", "Wild beasts", "Bandits"];
  const The_captain_carries = ["A superbly crafted sword", "Several daggers and a purse of gold", "A trusted blade and a map", "A lucky charm (rabbit’s foot, old coin)", "The token of a faraway love", "Extravagant jewels and silks", "Keys of many shapes and sizes", "A little jar of mustache wax"];
  const The_animal_handler_has = ["An awkward gait", "Incredibly large hands", "Holes in the breeches", "Quite an odor", "A threadbare shirt", "A ragged beard"];
  const The_animal_handler_wants_to = ["Earn a little silver", "Earn a little silver", "Go back home", "Go back home", "Survive the journey", "Have a drink and a rest"];
  const The_animal_handler_carries = ["A memento from a loved one", "Several morsels of animal feed", "Several morsels of food", "A few copper pieces", "A waterskin", "A wineskin"];
  const The_cook_greets_you_with = ["A goblet of warm wine", "A glass of water", "A glass of water", "A cup of cold porridge", "A hearty handshake", "A hearty handshake"];
  const The_cook_is_looking_for = ["Someone more important to talk to", "Some better ingredients", "A good joke or story", "A good joke or story", "The bottom of a bottle", "The bottom of a bottle"];
  const The_cook_carries = ["A filthy rag", "A large wooden spoon", "A grease-smeared apron", "An unusual belt purse", "A pouch full of spices", "A bottle of whisky"];
  const The_guard_is = ["The son of a miner or fisherman", "A veteran of warfare", "The son of a poor man", "A drunk", "A thug", "A favorite among the ladies"];
  const The_guard_works_for = ["The steady pay", "The steady pay", "A chance to dole out pain", "Gold to repay debts", "Gold to repay debts", "Gold to aid a family member"];
  const The_guard_has = ["An unsightly scar", "A foolish grin", "A foolish grin", "A stupid stare", "A stupid stare", "A beautiful, waxed mustache"];
  const The_guard_owns = ["A token from a favorite harlot", "A silk handkerchief", "A flask of wine", "A pair of dice or a deck of cards", "A blade with an inscription", "A highly polished blade"];
  const The_guide_is = ["A nomadic herder", "A nomadic herder", "A strange hermit", "A skilled hunter", "A skilled hunter", "A savage warrior"];
  const The_guide_is_looking_to = ["Help the caravan in any way he/she can", "Help the caravan in any way he/she can", "Lead the caravan astray", "Fill his purse with gold", "Fill his purse with gold", "Eat, drink, and be merry"];
  const The_guide_carries = ["An unusual map", "A unique trinket or piece of jewelry", "A spear or walking staff", "A spear or walking staff", "A large knife and some rope", "A large knife and some rope"];
  const The_merchant_is = ["A member of a trading clan", "A minor lord or lady", "An enterprising trader", "A member of a prominent family", "Of common birth", "The real owner’s representative"];
  const The_merchant_seeks_someone_to = ["Obtain a mysterious artifact", "Negotiate a trade contract", "Purchase goods", "Sabotage a rival merchant", "Secure a marriage", "Have a good time with"];
  const The_merchant_carries = ["A family heirloom", "Several inventories and invoices", "Several inventories and invoices", "Some very valuable jewels", "Some very valuable jewels", "A compromising love letter"];
  const The_merchant_will_trade_in = ["Coins and gems", "Coins and gems", "Gold and silver bullion", "Gold and silver bullion", "Water, provisions, and other goods", "Shells, beads, and trinkets"];
  const The_traveler_is = ["An exile", "A minstrel", "A pilgrim", "A sellsword", "A storyteller", "A treasure hunter"];
  const The_traveler_is_searching_for = ["A long lost friend", "The answer to a riddl", "The return of something stolen", "Revenge against a bitter rival", "New adventures", "Steady work"];
  const Tonight_the_traveler_is_looking_for = ["Accomplices on a quest", "Accomplices on a quest", "An audience to entertain", "Someone to hear a sad tale", "Drinking companions", "Drinking companions"];
  const arrayOfArraysEnum ={The_caravan_is,The_caravan$$$s_pack_animals_are,The_caravan_is_transporting,The_caravan$$$s_mood_is,The_captain_is,The_captain_is_looking_for,The_captain_wants_to_avoid,The_captain_carries,The_animal_handler_has,The_animal_handler_wants_to,The_animal_handler_carries,The_cook_greets_you_with,The_cook_is_looking_for,The_cook_carries,The_guard_is,The_guard_works_for,The_guard_has,The_guard_owns,The_guide_is,The_guide_is_looking_to,The_guide_carries,The_merchant_is,The_merchant_seeks_someone_to,The_merchant_carries,The_merchant_will_trade_in,The_traveler_is,The_traveler_is_searching_for,Tonight_the_traveler_is_looking_for};
  const arrayOfArrays = [The_caravan_is,The_caravan$$$s_pack_animals_are,The_caravan_is_transporting,The_caravan$$$s_mood_is,The_captain_is,The_captain_is_looking_for,The_captain_wants_to_avoid,The_captain_carries,The_animal_handler_has,The_animal_handler_wants_to,The_animal_handler_carries,The_cook_greets_you_with,The_cook_is_looking_for,The_cook_carries,The_guard_is,The_guard_works_for,The_guard_has,The_guard_owns,The_guide_is,The_guide_is_looking_to,The_guide_carries,The_merchant_is,The_merchant_seeks_someone_to,The_merchant_carries,The_merchant_will_trade_in,The_traveler_is,The_traveler_is_searching_for,Tonight_the_traveler_is_looking_for];
  const arrayOfInlinesEnum ={Exotic_beasts,Cloth,Gems,Metals};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Castle = function(){
  const The_castle_sits = ["Atop a mountain", "On a hill overlooking a wide plain", "At the fork of a river", "On a narrow, rocky peninsula", "Above a seaside cliff", "On a hill overlooking a river valley", "On a hill rising out of a swamp", "On a hill overlooking a forest", "Astride a desert oasis or natural spring", "On a ridge overlooking a frozen plain"];
  const The_castle_was_built_by = ["A wise king or queen", "An ambitious lord or lady", "An evil tyrant", "A mighty warrior or warlord", "A retired adventurer", "A celebrated war hero", "An unscrupulous king or queen", "A vain lord or lady", "A powerful witch or wizard", "A beloved sovereign", "A prosperous merchant", "A member of an ancient noble house"];
  const The_castle_was_built = ["In a past age", "In a past age", "Hundreds of years ago", "Hundreds of years ago", "A few decades ago", "Within the past decade"];
  const The_castle$$$s_condition_is = ["Perfect; upkeep has been fastidious", "Good; it been well-maintained", "Decent; there are only a few cracks in the walls, but the place can withstand a siege", "Fair; the castle has seen better days", "Poor; walls and towers badly need repairs", "Decrepit; the place is practically a ruin"];
  const Presently_the_castle_is_occupied_by = ["A member of the royal family", "An ambitious lord or lady", "An evil tyrant", "An elderly lord or lady", "A brash, young lord or lady", "A mercenary company", "A fearsome warlord or retired sellsword", "A wealthy merchant", "A retired pirate or thief", "A former adventurer", "An absentee noble lord", "The crown, but the sovereign rarely visits"];
  const The_position_or_territory_is_worth_defending_because = ["Grains grow well on the surrounding land", "The nearby mines are rich in ores or gems", "The surrounding land is excellent for grazing livestock", "Fruit trees grow on the surrounding land", "The nearby pass is the easiest way to cross the mountains", "The nearby harbor is important for trade", "The nearby river is important for trade", "The nearby source of freshwater is precious is in this region", "The wild lands beyond are full of threats", "The surrounding lands are part of a long-standing territorial dispute", "The surrounding land is held sacred", "The nearby lands are home to a rare herb, tree, or creature that has magical uses"];
  const The_defenses_include = ["Very high stone walls", "Incredibly thick stone walls", "A series of curtain walls and gatehouses", "A treacherous climb to reach the walls", "A moat filled with putrescent water", "A moat filled with thick, boot-sucking mud", "A moat filled with sharp spikes", "A moat that is home to one or more dangerous aquatic beasts", "An immense barbican", "A narrow footbridge to reach the postern"];
  const The_defenses_also_include = ["Hundreds of arrow slits", "One of the world's largest dual-portcullis gates", "A winding climb to reach the entrance", "Several covered parapets with murder holes under which intruders must pass", "A wide courtyard surrounded by flanking towers in the curtain wall", "An unusual or hidden means of entry"];
  const The_castle_can_be_held_effectively_by_as_few_as = ["5 soldiers and 20 archers", "20 soldiers, 5 knights, and 20 archers", "50 soldiers, 10 knights, and 40 archers", "20 knights, 20 archers, and 5 warmages", "100 soldiers, 50 archers, and 5 warmages", "100 soldiers, 20 knights, and 50 archers", "200 soldiers, 50 knights, and 100 archers", "200 soldiers, 100 knights, and 200 archers"];
  const In_addition_to_its_garrison_the_castle_can_hold_foodstores_to_withstand_a_threemonth_siege_for_up_to = ["50 people", "100 people", "200 people", "500 people", "1,000 people", "2,000 people"];
  const The_castle_is_known_for = ["Withstanding a grueling, lengthy siege", "Suffering an immense conflagration", "Changing hands several times over the course of the same war", "Bringing ill-fortune to those who hold it", "Being haunted by a former occupant", "Never falling in a siege", "Welcoming travelers seeking refuge", "Turning away travelers seeking refuge", "Its unusual architectural style", "Its beautiful, historic tapestries", "Its breathtakingly beautiful chapel", "The quality of its meals"];
  const What_is_rumored_to_be_hidden_in_the_castle = ["An underground tunnel that can serve as a last-gasp escape route", "The weapon of a long-dead hero", "The preserved head of an ancient villain", "A long-lost religious artifact", "A missing lord or lady", "A book of vile curses", "A book of dark and ancient secrets", "A cursed treasure hoard", "The last bottle of famous vintage of wine", "A lost work of a celebrated artist", "The crypt of an ancient sovereign", "An unhatched dragon egg"];
  const This_chamber_is = ["An antechamber or waiting room", "An armory", "An aviary, dovecote, owlery, or rookery", "A banquet hall", "The barracks", "A bath or privy", "A bedroom INLINE", "A chapel or shrine", "A crypt", "An intimate or informal dining room", "A dressing room", "A gallery INLINE", "A guardroom", "A kennel, menagerie, or stable", "The kitchen", "A library or study", "A pantry", "Store room for mundane supplies or a cistern for drinking water", "The throne room", "A treasure vault (likely hidden and/or protected by traps)"];
  const A_bedroom = ["simple", "comfortable", "luxurious"]; 
  const A_gallery = ["armor and weaponry", "paintings", "sculptures", "tapestries", "hunting trophies", "trophies of war"]; 
  const You_notice = ["An armchair flanked by two sconces", "A large armoire or buffet cabinet", "A bench with a cushion", "A brazier", "A candelabrum on a large table", "A plain chair beside a window", "A heavy wooden chest", "A chest of drawers with a blanket on top", "A desk with some quills and parchment", "A fireplace with a mantle", "A fireplace with a small pile of wood", "A fresco with a padded chair beneath it", "Portrait of a noble", "A painting of a landscape or seascape", "A bust on a pedestal", "A shelf containing books or knick knacks", "A low table in front of a small sofa", "A large table beneath a chandelier", "An ornate tapestry", "A small wall basin and font"];
  const arrayOfArraysEnum ={The_castle_sits,The_castle_was_built_by,The_castle_was_built,The_castle$$$s_condition_is,Presently_the_castle_is_occupied_by,The_position_or_territory_is_worth_defending_because,The_defenses_include,The_defenses_also_include,The_castle_can_be_held_effectively_by_as_few_as,In_addition_to_its_garrison_the_castle_can_hold_foodstores_to_withstand_a_threemonth_siege_for_up_to,The_castle_is_known_for,What_is_rumored_to_be_hidden_in_the_castle,This_chamber_is,You_notice};
  const arrayOfArrays = [The_castle_sits,The_castle_was_built_by,The_castle_was_built,The_castle$$$s_condition_is,Presently_the_castle_is_occupied_by,The_position_or_territory_is_worth_defending_because,The_defenses_include,The_defenses_also_include,The_castle_can_be_held_effectively_by_as_few_as,In_addition_to_its_garrison_the_castle_can_hold_foodstores_to_withstand_a_threemonth_siege_for_up_to,The_castle_is_known_for,What_is_rumored_to_be_hidden_in_the_castle,This_chamber_is,You_notice];
  const arrayOfInlinesEnum ={A_bedroom,A_gallery};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Cavern = function(){
  const The_cave_mouth_is = ["Wide and tall, letting much daylight into the entry chamber", "A wide sinkhole", "An easy to spot, narrow passage", "A steep, slippery sloped tunnel", "A man-made tunnel", "A collapsed tunnel, impassable without excavation", "Marked with several warning signs", "Hidden by the terrain INLINE", "Hidden by vegetation INLINE", "Difficult to access INLINE"];
  const Hidden_by_the_terrain = ["boulders", "waterfall", "rocky overhang", "hillock"]; 
  const Hidden_by_vegetation = ["a briar patch", "a curtain of moss", "enormous tree roots", "enormous tree roots", "overgrown vines"]; 
  const Difficult_to_access = ["up or down a cliff face", "up or down a cliff face", "down a deep hole", "in an underwater tunnel", "in an underwater tunnel", "through an illusory rock or wall"]; 
  const You_see = ["A trickle of water flowing down the walls and across the floor", "An underground lake of potable water", "A pool of stagnant water", "A natural bridge over a chasm", "A narrow chasm with walls close enough to climb between", "A deep chasm with no bottom in sight", "A shaft in the ceiling with no light coming from it", "A shaft in the ceiling with dim light coming from it", "A group of stalagmites arranged in a circle", "An arrangement of two large stalactites and two large stalagmites, reminiscent of fangs in a yawning mouth", "A pair of natural columns", "A large stalactite that has broken off from the ceiling and fallen to the floor", "An array of many small stalactites spreading across the ceiling", "A damp wall covered in soft mold", "A recess in the wall, covered in slimy mold", "A large patch of glowing fungus", "A large patch of small mushrooms", "A group of enormous mushrooms", "A large cavern with a strong echo", "A claustrophobic tunnel with a low ceiling"];
  const You_notice = ["A cache of abandoned, decrepit mining equipment", "Some old dry bones", "Many bones underfoot", "Evidence of a recent encampment", "An enormous spider web", "A wide slippery patch of mold on the floor", "The clatter of rocks falling", "Loose stones underfoot", "An unstable ceiling", "A distant sound INLINE", "The name of a previous traveler carved into or written on a wall", "Several ancient runes carved into the wall"];
  const A_distant_sound = ["a scream", "hammers at work", "footsteps", "drums"]; 
  const The_cave_is_inhabited_by = ["Bullywugs", "Bullywugs", "Corpse creeper", "Corpse creeper", "Chuul", "Chuul", "Cloaker", "Cloaker", "Crawling claw", "Crawling claw", "Cyclops", "Cyclops", "Darkmantle", "Darkmantle", "Shadow dragon", "Shadow dragon", "Drider", "Drider", "Deep dwarves", "Deep dwarves", "Dark elves", "Dark elves", "Ettin", "Ettin", "Fomorian", "Fomorian", "Fungi", "Fungi", "Galeb duhr", "Galeb duhr", "Gargoyle", "Gargoyle", "Ghost", "Ghost", "Ghoul", "Ghoul", "Giant, hill", "Giant, hill", "Giant, stone", "Giant, stone", "Gibbering mouther", "Gibbering mouther", "Goblins", "Goblins", "Grell", "Grell", "Grick", "Grick", "Grimlock", "Grimlock", "Hobgoblins", "Hobgoblins", "Hook horror", "Hook horror", "Kobolds", "Kobolds", "Mephits", "Mephits", "Mimic", "Mimic", "Myconids", "Myconids", "Ogres", "Ogres", "Oozes", "Oozes", "Orcs", "Orcs", "Otyugh", "Otyugh", "Piercer", "Piercer", "Purple worm", "Purple worm", "Roper", "Roper", "Rust monster", "Rust monster", "Shadow", "Shadow", "Skeletons", "Skeletons", "Spectre", "Spectre", "Stirges", "Stirges", "Troglodytes", "Troglodytes", "Trolls", "Trolls", "Hulking tunnelbeast", "Hulking tunnelbeast", "Wraith", "Wraith", "Xorn", "Xorn", "Yuan-ti", "Yuan-ti", "Zombies", "Zombies"];
  const The_creature_is = ["A predator or a hunter", "A food source for other denizens", "A recently-arrived squatter or invader", "A long-time resident", "A parasite or a scavenger", "A host or the dominant species", "Unusually abundant", "Living in deliberate isolation", "Living in unintentional isolation", "Severely out of place in this cave"];
  const You_find = ["A colony of poisonous mushrooms", "A patch of toxic mold", "The ceiling caves in", "Several rocks tumble down a sloped wall", "The floor is very slippery", "Your foot misses the floor as you step into a pit or chasm"];
  const The_cave_wall_is = ["Slightly damp", "Dripping wet", "Slick with mold", "Covered in soft fungi", "Dry as a bone", "Rough and dry", "Dry and smooth", "Jagged", "Pockmarked", "Crumbling, with loose bits flaking off", "Crumbling, with large chunks falling off", "Covered in an unidentifiable slime"];
  const The_cave_ceiling_is = ["Uncomfortably close to your head", "Covered in stalactites (watch your head!)", "Smooth as glass", "Rough and jagged", "Joined to the floor by natural columns", "So high it is difficult to see"];
  const You_come_upon = ["An explorer INLINE", "An escaped slave INLINE", "A forager INLINE", "A fugitive criminal INLINE", "A lost treasure hunter INLINE", "A mapmaker INLINE", "A messenger INLINE", "A miner INLINE", "A prospector INLINE", "A scout INLINE", "A soldier INLINE", "A spy INLINE"];
  const An_explorer = ["duergar", "goblin", "human", "kobold"]; 
  const An_escaped_slave = ["dwarf", "goblin", "gnome", "halfling", "human", "kobold"]; 
  const A_forager = ["duergar", "goblin", "kobold", "orc"]; 
  const A_fugitive_criminal = ["heretic", "killer", "smuggler", "thief"]; 
  const A_lost_treasure_hunter = ["dwarf", "half-elf", "high elf", "human"]; 
  const A_mapmaker = ["dwarf", "goblin", "gnome", "svirfneblin"]; 
  const A_messenger = ["dark elf", "goblin", "gnome", "svirfneblin"]; 
  const A_miner = ["dwarf", "svirfneblin", "gnome", "goblin", "human", "kobold"]; 
  const A_prospector = ["dwarf", "gnome", "human", "svirfneblin"]; 
  const A_scout = ["dark elf", "goblin", "kobold", "orc"]; 
  const A_soldier = ["dark elf", "duergar", "dwarf", "goblin", "kobold", "orc"]; 
  const A_spy = ["dark elf", "duergar", "goblin", "kobold"]; 
  const arrayOfArraysEnum ={The_cave_mouth_is,You_see,You_notice,The_cave_is_inhabited_by,The_creature_is,You_find,The_cave_wall_is,The_cave_ceiling_is,You_come_upon};
  const arrayOfArrays = [The_cave_mouth_is,You_see,You_notice,The_cave_is_inhabited_by,The_creature_is,You_find,The_cave_wall_is,The_cave_ceiling_is,You_come_upon];
  const arrayOfInlinesEnum ={Hidden_by_the_terrain,Hidden_by_vegetation,Difficult_to_access,A_distant_sound,An_explorer,An_escaped_slave,A_forager,A_fugitive_criminal,A_lost_treasure_hunter,A_mapmaker,A_messenger,A_miner,A_prospector,A_scout,A_soldier,A_spy};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_CelestialB = function(){
  const The_beast_appears_in_the_form_of = ["A horse", "A badger", "A lion", "A bull", "A serpent", "A dove", "A stag", "An eagle", "A swan", "A griffon", "A unicorn", "A hound"];
  const The_beast_has = ["Shining golden eyes", "Sympathetic pale blue or grey eyes", "Eyes full of knowledge and judgment", "A crown of gold", "Wings of the pure white feathers", "Pristine white feathers or fur", "An aura of glowing light", "An aura of peacefulness"];
  const and = ["Moves gracefully, almost gliding", "Carries itself proudly", "Has a gentle manner", "Speaks eloquently", "Speaks in poetic riddles", "Fills you with a sense of peace"];
  const The_beast_is_looking_for = ["An answer to a cosmic riddle", "A mortal worthy of its service", "A mortal worthy of serving its master", "A mortal condemned to die by its master", "A mortal who has succumbed to temptation", "An item of importance to its master", "The location of an ancient, hidden evil", "The resting place of a great hero"];
  const arrayOfArraysEnum ={The_beast_appears_in_the_form_of,The_beast_has,and,The_beast_is_looking_for};
  const arrayOfArrays = [The_beast_appears_in_the_form_of,The_beast_has,and,The_beast_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_City = function(){
  const The_city_grew_up_around = ["A coastal harbor", "A calm, coastal bay", "A large freshwater lake", "A wide, navigable river", "A river navigable by small craft", "The mouth of a river or a river delta", "The confluence of two rivers", "A series of natural springs", "A well-traveled crossroads", "A water source and a well-traveled road"];
  const The_city_is_near_a_region_ideal_for_mining_growing_or_grazing = ["Rice or wheat", "Iron ore", "Potatoes", "Copper ore", "Sugar cane", "Gold or silver deposits", "Tobacco", "Clay or granite deposits", "Cotton", "Quartz or salt deposits", "Fruit trees", "Peat or coal deposits", "Cabbages", "Hardwood lumber", "Cattle", "Barley and oats", "Dairy cows", "Beans and corn", "Sheep", "Nuts and olives"];
  const The_city_is_known_for_its = ["Romance", "Architectural style", "Jousting games", "Architectural feats", "Superior soldiers", "Artists and poets", "Street festivals", "Inventive cuisine", "Religious fervor", "Traditional cuisine", "Religious feasts", "Suggestive dancing", "Traditional dress", "Gladiatorial games", "Unusual dress", "Horse races", "Theater scene", "Scholars and sages", "Wine and/or ale", "Music and/or dance"];
  const The_city_is_ruled_by = ["The head of a noble family", "A council of distinguished nobles", "A council of wealthy merchants", "A council of elected officials", "An elected mayor or protector", "A benevolent sovereign or high priest", "A wicked tyrant or greedy autocrat", "A brutal warlord or military commander", "A cabal of witches and wizards", "The leaders of a religious order"];
  const The_city_experienced = ["A destructive fire", "Mass conversions", "A deadly plague", "An earthquake", "A bloody rebellion", "Age of exploration", "A lengthy siege", "A terrible famine", "Religious wars", "A disastrous flood", "Territorial wars", "A legendary storm", "Foreign occupation", "An assassination", "An economic boom", "A series of riots", "A great depression", "A great discovery", "A dragon attack", "Vermin infestation"];
  const The_people_are_fearful_of = ["Bandits and outlaws", "Barbarian invasions", "Disease outbreaks", "A dragon or legendary beast", "Destructive flooding", "Food shortages", "Occupation by a foreign empire", "The wrath of a vengeful god", "Magic and new inventions", "Pirates, smugglers, and bands of thieves", "A recently established religion", "A rival city"];
  const The_city_is_defended_by = ["A disciplined military guard", "A standing army of devoted soldiers", "A company of sellswords and knaves", "An order of holy knights", "Little; the city’s been sacked many times", "A huge, fortress or citadel within the city", "Watchtowers spread throughout the lands", "Thick stone walls and impenetrable gates", "High stone walls, catapults, and scorpions", "A powerful magical ward or gigantic golem"];
  const The_laws_are = ["Enforced by a strict, orderly city watch", "Enforced by a corrupt, roguish city watch", "Not enforced among the wealthy elite", "Enforced in a haphazard fashion, incomprehensible to visitors", "Not enforced for those who pay bribes", "More like guidelines", "Enforced by a secret society of assassins, mages, or priests", "Enforced by a company of mercenaries", "Simple, easy to learn and to follow", "Extensive and complicated, nonsensical", "Enforced by a cheerful drunken sheriff", "Enforced by a rigid soldier-turned-sheriff"];
  const Within_or_outside_the_government_power_is_held_by = ["A ruthless assassins’ guild", "A populist demagogue", "The captain of a mercenary company", "A champion knight or arena fighter", "One or more crafting guilds", "A dangerous crime boss", "One or more criminal gangs", "A charismatic cult leader", "One or more merchant guilds", "A scheming noble lord or lady", "An outspoken philosopher or scholar", "A celebrated poet and playwright", "A popular priest or priestess", "A secret society of lorekeepers", "Smugglers and black market dealers", "The son or daughter of a deposed ruler", "A wealthy trader of exotic goods", "A conniving vampire or fiend", "A bold war hero", "A clever witch or wizard"];
  const You_see_a_or_an = ["Academy or university", "Ancient ruin", "Arena", "Cemetery", "Civic hall, council hall, or guild hall", "Common or greenway", "Fortress", "Gateway or arch", "Library", "Lighthouse or watchtower", "Marketplace", "Memorial INLINE", "Monument INLINE", "Palace", "Pier, marina, or traveler's bazaar", "Parade grounds or drilling yar", "Plaza or public square", "Temple", "Theater", "Stockyards"];
  const Memorial = ["mausoleum", "reflecting pool", "large statue", "botanical garden"]; 
  const Monument = ["colossus", "column", "obelisk", "plaque", "rotunda", "wall"]; 
  const This_part_of_the_city_is_the = ["University district", "Slums", "Military district", "Residential, poor", "Market district", "Res., middle class", "Garden district", "Res., upper class", "Monument district", "Palace district", "Necropolis", "Temple district", "Theater district", "Crafting district", "Civic center", "Docks district", "Ethnic enclave", "Riverfront district", "Foreign enclave", "Harbor district"];
  const The_locals_call_this_street = ["rolled 1 INLINE", "rolled 2 INLINE", "rolled 3 INLINE", "rolled 4 INLINE", "rolled 5 INLINE", "rolled 6 INLINE", "rolled 7 INLINE", "Market Street", "rolled 9 INLINE", "rolled 10 INLINE", "rolled 11 INLINE", "rolled 12 INLINE", "rolled 13 INLINE", "rolled 14 INLINE", "rolled 15 INLINE", "rolled 16 INLINE", "rolled 17 INLINE", "rolled 18 INLINE", "rolled 19 INLINE", "rolled 20 INLINE"];
  const rolled_1 = ["Armory Street", "Barricade Street", "Knight Street", "Pike Street", "Shield Street", "Spear Street"]; 
  const rolled_2 = ["Arch Street", "Bridge Street.", "Canal Street", "Cross Street", "Falls Road", "River Street"]; 
  const rolled_3 = ["Castle Street", "Inn Street", "Keep Street", "Rock Way", "House Street", "Hovel St.", "Tower Street"]; 
  const rolled_4 = ["Cattle Road", "Common Street", "Green Street", "Greenway Street", "Meadow Lane", "Orchard Street"]; 
  const rolled_5 = ["Cooper Street", "Mason Street", "Smith Street", "Tailor Street", "Stone Street", "Weaver Street"]; 
  const rolled_6 = ["Bluff Street", "Crestline Way", "High Street", "Highland Way", "Hilltop Lane", "Ridge Street"]; 
  const rolled_7 = ["Devil's Alley", "Magpie Lane", "Paupers Street", "Penny Lane", "Rat's Alley", "Serpent's Alley"]; 
  const rolled_9 = ["Baker Street", "Hook Street", "Farm Road", "Feather Street", "Mill Street", "Ranchers Road"]; 
  const rolled_10 = ["Banner Road", "Drum Street", "March Street", "Parade Street", "Trumpet Street", "Victory Lane"]; 
  const rolled_11 = ["Crown Street", "King Street", "Lords Lane", "Palace Way", "Queens Street", "Royal Street"]; 
  const rolled_12 = ["Circle Street", "Brick Road", "Perimeter Street", "Townline Road", "Watch Street", "Wall Street"]; 
  const rolled_13 = ["Bay Street", "Commerce Street", "Harbor Street", "Lake Street", "Pier Street", "Water Street"]; 
  const rolled_14 = ["Bayview Street", "Castleview Street", "Gardenview Street", "Greenview Street", "Harborview Street", "Riverview Street"]; 
  const rolled_15 = ["North Road", "North Street", "South Road", "South Street", "East Road", "West Road"]; 
  const rolled_16 = ["Cedar Street", "Cherry Street", "Maple Street", "Oak Street", "Pine Street", "Willow Street"]; 
  const rolled_17 = ["Northgate Street", "Southgate Street", "Eastgate Street", "Westgate Street", "Old Gate Road", "Watchtower Street"]; 
  const rolled_18 = ["Briar Street", "Garden Street", "Lilac Street", "Lily Way", "Rose Street", "Violet Street"]; 
  const rolled_19 = ["Emerald Way", "Jewelers Lane", "Golden Lane", "Rich Way", "Ruby Road", "Silver Lane"]; 
  const rolled_20 = ["Ancient Way", "Bath Street", "Fountain Street", "Old Brick Road", "Stone Ruin Road", "Tumblestone Way"]; 
  const arrayOfArraysEnum ={The_city_grew_up_around,The_city_is_near_a_region_ideal_for_mining_growing_or_grazing,The_city_is_known_for_its,The_city_is_ruled_by,The_city_experienced,The_people_are_fearful_of,The_city_is_defended_by,The_laws_are,Within_or_outside_the_government_power_is_held_by,You_see_a_or_an,This_part_of_the_city_is_the,The_locals_call_this_street};
  const arrayOfArrays = [The_city_grew_up_around,The_city_is_near_a_region_ideal_for_mining_growing_or_grazing,The_city_is_known_for_its,The_city_is_ruled_by,The_city_experienced,The_people_are_fearful_of,The_city_is_defended_by,The_laws_are,Within_or_outside_the_government_power_is_held_by,You_see_a_or_an,This_part_of_the_city_is_the,The_locals_call_this_street];
  const arrayOfInlinesEnum ={Memorial,Monument,rolled_1,rolled_2,rolled_3,rolled_4,rolled_5,rolled_6,rolled_7,rolled_9,rolled_10,rolled_11,rolled_12,rolled_13,rolled_14,rolled_15,rolled_16,rolled_17,rolled_18,rolled_19,rolled_20};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_ColdOceanCatch = function(){
  const Nearshore_catch_You_haul_in = ["A clam", "A crab", "A herring", "A lobster", "A mussel", "An oyster", "A prawn", "A salmon", "A smelt", "A rare catch (see below)"];
  const Deepsea_catch_You_haul_in = ["A crab", "A cod", "A haddock", "A halibut", "A mackerel", "An oyster", "A shrimp", "A squid", "A tuna", "A rare catch (see below)"];
  const Rare_catch_You_haul_in = ["A piece of junk INLINE", "An abalone", "A monkfish", "An octopus (fights, attacks)", "A sea bass (fights)", "A giant squid (fights, attacks)"];
  const A_piece_of_junk = ["seaweed tangle", "seaweed tangle", "torn net", "rotten wood", "rotten wood", "old boot"]; 
  const arrayOfArraysEnum ={Nearshore_catch_You_haul_in,Deepsea_catch_You_haul_in,Rare_catch_You_haul_in};
  const arrayOfArrays = [Nearshore_catch_You_haul_in,Deepsea_catch_You_haul_in,Rare_catch_You_haul_in];
  const arrayOfInlinesEnum ={A_piece_of_junk};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_CommanderCamp = function(){
  const The_commander_is = ["A brilliant strategist", "A brutish thug", "A dashing swashbuckler", "A celebrated war hero", "An anointed knight", "A career soldier"];
  const The_commander_is_looking_for = ["Information regarding enemy positioning", "Information regarding the terrain ahead", "Reinforcements or new recruits", "News of his hometown", "Revenge against a bitter rival", "Drinking companions and storytellers"];
  const The_commander_is_trying_to_avoid = ["Barbarians", "Bandits", "The enemy army", "The enemy army", "Hazardous terrain", "Hazardous terrain"];
  const The_commander_carries = ["A superbly crafted sword", "A trusted blade and a map", "A lucky charm (rabbit’s foot, old coin)", "The token of a faraway love", "A pipe and pouch of tobacco", "A little jar of mustache wax"];
  const arrayOfArraysEnum ={The_commander_is,The_commander_is_looking_for,The_commander_is_trying_to_avoid,The_commander_carries};
  const arrayOfArrays = [The_commander_is,The_commander_is_looking_for,The_commander_is_trying_to_avoid,The_commander_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_CookCamp = function(){
  const The_cook_is_looking_for = ["Someone more important to talk to", "Someone to try an improvised recipe", "Some better ingredients", "A good joke or story", "Someone with whom to share some wine", "The bottom of a bottle"];
  const arrayOfArraysEnum ={The_cook_is_looking_for};
  const arrayOfArrays = [The_cook_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_CorporealUndead = function(){
  const The_person$$$s_spirit_is = ["Occupying its original body, showing no signs of decay", "Occupying its original body, showing some signs of decay", "Occupying its original body, badly decomposed", "Occupying its original body, only bare bones remain", "Occupying the corpse of someone else", "Occupying the living body of a stranger", "Occupying the living body of someone the person knew", "Occupying the living body of a beast", "Occupying part of its original body (skull or hand)", "Occupying part of someone else’s corpse (skull or hand)"];
  const The_creature_moves = ["With a shambling gait", "With an awkward limp", "Lurching unpredictably", "With more of a shimmy than a walk", "Taking slow, steady steps", "With surprising quickness and agility"];
  const The_creature_has = ["A tattered shirt", "A missing arm, leg, or finger", "Only one eye", "A club foot", "Long-scraggly hair", "Chattering teeth", "Large crude stitches in its side", "An awful hunchback", "Incredibly long fingernails", "Drool on its chin", "Buck teeth", "A creepy mustache"];
  const The_spirit$$$s_initial_reaction_when_it_encounters_living_creatures_is = ["Hostile and aggressive", "Hostile and suspicious", "Nervous and frightened", "Mostly indifferent", "Completely indifferent", "Curious but suspicious", "Curious and playful", "Desperate and aggressive"];
  const arrayOfArraysEnum ={The_person$$$s_spirit_is,The_creature_moves,The_creature_has,The_spirit$$$s_initial_reaction_when_it_encounters_living_creatures_is};
  const arrayOfArrays = [The_person$$$s_spirit_is,The_creature_moves,The_creature_has,The_spirit$$$s_initial_reaction_when_it_encounters_living_creatures_is];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_CraftingGuild = function(){
  const This_is_a_guild_for = ["Blacksmiths or farriers", "Bowyers or fletchers", "Butchers or salters", "Candlemaker", "Cobblers or shoemakers", "Coopers, shipwrights, or carpenters", "Dyers", "Glassblowers or glaziers", "Goldsmiths, silversmiths, or finesmiths", "Jewelers or gemcutters", "Locksmiths, cutlers, or bucklemakers", "Metalsmiths, armorers, or ropermakers", "Millers, cooks, or bakers", "Potters or tilemakers", "Tailors, furriers, or hatmakers", "Masons, stonecutters, or bricklayer", "Tanners, leatherworkers, or skinners", "Weavers or sailmakers", "Wheelwrights, cartwrights, or carpenters", "Winemakers, distillers, or brewers"];
  const This_guild_is_for = ["Alchemists or apothecaries", "Armorers or weaponsmiths", "Basketweavers", "Calligraphers, scriveners, or bookbinders", "Cartographers, scribes, or chartmakers", "Coppersmith or brassworkers", "Glovers or pursemakers", "Painters, limners, or plasterers", "Rugmakers, scabbardmakers, or sculptors", "Saddlers or harnessmakers", "Tinkers, tiinsmiths, pewterers, or casters", "Woodcarvers, roofers, or joiners"];
  const The_guild_is = ["Poor; though once great, hard times have come, and the guild has little influence left", "Brand new; the guild is frantically recruiting members in order to gain power", "Exponentially rising; a recent boon has provided great profits and influence", "Slowing; a rising competitor is slowly cutting into the guild’s profits and influence", "Absolute; the guild has complete dominance in their field", "Spotty; the guild’s profits and influence rise and fall, as market conditions change", "Unquestioned; the guild exerts complete dominance over all other guilds in the area", "Questionable; though the guild claims control, some operators skirt its rules"];
  const The_guild_is_involved_in = ["None; they are paragons of morality", "Staying well within the law, if slipping on a few taxes due to ignorance, of course", "Knowing how to play the political game, they trade a few favors with officials", "Guild leaders having dollar signs for eyes, and setting advantageous prices in the city", "Price floors becoming commonplace and frequent small bribes to city officials to overlook minor illicit activities", "A variety of upper-level bribes, some minor scams, and the dismay of local priests", "Rampant corruption, with large-scale bribery of various city officials and contracts with a thieves’ guild and occasionally an assassin", "Pacts with crime lords, fiends, or vampires, large-scale counterfeiting, and treason are business-as-usual for this guild"];
  const Guild_business_occurs = ["In the guild leader's personal residence or in the home of an influential merchant", "In the dusty basement of a tavern or pub", "In the backroom of a tavern or pub", "In a towering guildhall that leans slightly", "On a moored ship or in a large warehouse", "In the ruin of an old temple or palace", "In an open-air pavilion in the city's bazaar", "In a large guildhall just off the city’s bazaar", "In an opulent guildhall, showcasing riches", "In a house down a shady back-alley", "In a guildhall jointly shared with all other guilds of the city", "In a famous, centuries-old guildhall"];
  const You_must_fetch_a_shipment_of_goods_from = ["The city gates, held up by a bureaucratic city official", "The nearest village, where they're caught up in some small-town superstition", "A relatively nearby city, where there is a severe mix-up with the shipments", "The natural areas one would gather them, a chance to learn the roots of the trade", "The stores of the city's banks, which must be paid off from their mortgage", "Across the room where the party receives the quest (fetching is the easy part)"];
  const Recently_the_guild_has_lost_access_to_raw_materials_or_manufacturing_because_of = ["A recent venture with a supplier, rival, or local official that has turned out badly", "A trade blockade that has to be resolved", "A thieves’ guild that is targeting the guild, but may be convinced to look elsewhere", "A master using materials frivolously, so new sources must be found", "A city or religious official banning the goods, citing them as immoral", "Spending all their revenue to fulfill a special contract or bribing officials, lacking foresight to buy sufficient raw materials"];
  const You_must_fetch_a_rare_creature_or_material_from = ["The marketplace of a foreign city or a legendary city on an elemental plane", "An ancient dwarven stronghold's forges", "A quaint pasture—in the wildest parts of a celestial realm", "A faraway island, rumored to have cannibals and foul magicks", "A mystic mirage that manifests in a desert for twenty minutes once every century", "The Plane of Rats (or other filthy location)"];
  const arrayOfArraysEnum ={This_is_a_guild_for,This_guild_is_for,The_guild_is,The_guild_is_involved_in,Guild_business_occurs,You_must_fetch_a_shipment_of_goods_from,Recently_the_guild_has_lost_access_to_raw_materials_or_manufacturing_because_of,You_must_fetch_a_rare_creature_or_material_from};
  const arrayOfArrays = [This_is_a_guild_for,This_guild_is_for,The_guild_is,The_guild_is_involved_in,Guild_business_occurs,You_must_fetch_a_shipment_of_goods_from,Recently_the_guild_has_lost_access_to_raw_materials_or_manufacturing_because_of,You_must_fetch_a_rare_creature_or_material_from];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Cult = function(){
  const The_cultists_revere = ["A dragon", "A demon lord", "An archdevil", "A long-dead ancient hero INLINE", "A long-dead ancient villain INLINE", "A dead god or undead being", "An aberrant creature INLINE", "An elemental creature", "A primordial or titan", "Primal spirits or an archfey", "An exarch of a god", "The cult’s own mortal leader"];
  const A_longdead_ancient_hero = ["bard", "beastmaster", "elf-maid or prince", "knight or crusader", "hunter", "prophet"]; 
  const A_longdead_ancient_villain = ["giant", "necromancer", "vampire or lich", "warlord", "werewolf or wererat", "witch"]; 
  const An_aberrant_creature = ["brain eater", "cosmic horror", "eye beast", "eyeless fish thing", "gibbering maw", "star spawn"]; 
  const The_cultists_meet_in = ["A secret chamber in a well-known temple", "The cellar of a popular tavern", "A secret chamber in a large guildhall", "The cellar of a wealthy merchant's house", "The city sewers", "Ancient catacombs beneath the city", "A cabin in the countryside", "A creepy, dark cave", "A heavily guarded chamber within a castle", "The stacks of a well-stocked library"];
  const The_cult$$$s_leader_is = ["A devoted acolyte", "A dogmatic teacher", "An adept healer", "A charismatic preacher", "An eccentric scholar", "An outspoken zealot", "A dangerous megalomaniac", "A charismatic demagogue", "A mysterious foreigner", "A well-known public figure", "A ruthless killer", "A femme fatale", "A charming rogue", "A powerful noble", "A talented artist", "A religious fanatic", "A veteran soldier", "A humble artisan", "An ancient hero reborn", "The second coming of a god"];
  const The_cult$$$s_membership_is_primarily_made_up_of = ["The poor and downtrodden INLINE", "The wealthy elite INLINE", "A segment of another religion's flock INLINE", "Members of a particular trade INLINE", "Members of a particular race INLINE", "Members of all social strata"];
  const The_poor_and_downtrodden = ["slaves", "beggars", "laborers", "servants"]; 
  const The_wealthy_elite = ["guildmasters", "merchants", "nobles", "royalty"]; 
  const A_segment_of_another_religion$$$s_flock = ["sun god", "earth mother", "death god", "moon goddess", "goddess of love", "storm god", "trickster god", "war god"]; 
  const Members_of_a_particular_trade = ["blacksmiths", "carpenters", "farmers", "fishermen", "miners", "soldiers", "stonemasons", "weavers"]; 
  const Members_of_a_particular_race = ["dwarves", "elves", "gnomes", "goblins", "halflings", "humans", "orcs", "lizardfolk or kobolds"]; 
  const The_cult$$$s_practices_involve = ["Animal sacrifice INLINE", "Human sacrifice INLINE", "Self-mutilation INLINE", "Burnt offerings INLINE", "Offerings of gold, gems, and valuables", "Strange incantations", "Public acts of violence INLINE", "Ritualistic sexual acts INLINE"];
  const Animal_sacrifice = ["bulls", "calves", "cats", "chickens", "dogs", "goats", "pigeons", "rabbits or rats", "sheep", "songbirds or waterfowl"]; 
  const Human_sacrifice = ["children", "the elderly", "harlots", "priests and priestesses", "virgins", "volunteers"]; 
  const Selfmutilation = ["arm", "back", "cheek", "chest", "ear", "eye", "feet", "finger", "genitalia", "nose"]; 
  const Burnt_offerings = ["corpses", "rare herbs", "sacred incense", "high-quality meat", "nonbelievers", "prisoners"]; 
  const Public_acts_of_violence = ["arson", "beatings", "looting", "murders", "riots", "vandalism"]; 
  const Ritualistic_sexual_acts = ["bestiality", "breedings", "deflowerings", "weddings with beddings", "orgies"]; 
  const The_cult$$$s_goals = ["Domination of the city", "Destruction of the city", "Reincarnation of a long-dead entity", "Declaration of war against a rival city", "Rebellion against the city's elite", "Death to non-believers", "Opening a portal to another plane", "Release of a powerful captive entity"];
  const The_cult$$$s_members_must_follow_a_strict_rule_regarding = ["Wearing a flower in the hair or on the lapel INLINE", "Fashion trends", "Maintaining their personal weapon INLINE", "Treatment of pets", "Mounting a horse", "Dressing one’s self for worship", "Dressing one’s self for day-to-day activities", "Diet", "Exercise routines", "Bathing", "Styling one’s hair", "Brushing one’s teeth"];
  const Wearing_a_flower_in_the_hair_or_on_the_lapel = ["lily", "orchid", "rose", "petunia", "poppy", "tulip"]; 
  const Maintaining_their_personal_weapon = ["club", "club", "dagger", "dagger", "handaxe", "staff"]; 
  const The_cult$$$s_members_are_fearful_of_or_take_special_care_to_avoid = ["Hallowed places", "Moonlight", "Sunlight", "Crossing running water", "Sharp wooden objects", "Garlic, onions, or other specific herbs", "Silver objects", "Relics of the gods", "Sleeping outdoors", "Milk and cheese", "Eating meat", "Sobriety"];
  const The_cult$$$s_attitude_toward_their_leader_is = ["Jealous", "Loyal and proud", "Mutinous", "Devoted and fawning", "Fearful", "Loyal and defensive"];
  const arrayOfArraysEnum ={The_cultists_revere,The_cultists_meet_in,The_cult$$$s_leader_is,The_cult$$$s_membership_is_primarily_made_up_of,The_cult$$$s_practices_involve,The_cult$$$s_goals,The_cult$$$s_members_must_follow_a_strict_rule_regarding,The_cult$$$s_members_are_fearful_of_or_take_special_care_to_avoid,The_cult$$$s_attitude_toward_their_leader_is};
  const arrayOfArrays = [The_cultists_revere,The_cultists_meet_in,The_cult$$$s_leader_is,The_cult$$$s_membership_is_primarily_made_up_of,The_cult$$$s_practices_involve,The_cult$$$s_goals,The_cult$$$s_members_must_follow_a_strict_rule_regarding,The_cult$$$s_members_are_fearful_of_or_take_special_care_to_avoid,The_cult$$$s_attitude_toward_their_leader_is];
  const arrayOfInlinesEnum ={A_longdead_ancient_hero,A_longdead_ancient_villain,An_aberrant_creature,The_poor_and_downtrodden,The_wealthy_elite,A_segment_of_another_religion$$$s_flock,Members_of_a_particular_trade,Members_of_a_particular_race,Animal_sacrifice,Human_sacrifice,Selfmutilation,Burnt_offerings,Public_acts_of_violence,Ritualistic_sexual_acts,Wearing_a_flower_in_the_hair_or_on_the_lapel,Maintaining_their_personal_weapon};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Cultist = function(){
  const The_cultist = ["Is an outspoken true believer", "Is a raving lunatic", "Is a quiet, fervent believer", "Has doubts, but is devoted to the cult's leader or causes", "Has doubts, but is too afraid to voice them", "Doesn't care about the religious stuff; the cult meets other needs"];
  const The_cultist_has = ["A bandage on the thumb", "A face tattoo of a holy symbol", "A tattoo depicting an evil icon", "A large scar on the throat", "Scraggly matted hair", "A shaved head", "Scars on the wrists", "A protruding chin", "A maniacal grin", "A surly curl of the lip", "A gap between the front teeth", "A lush, full beard"];
  const The_cultist_is_wearing = ["A string of garlic around the neck", "A robe with a tear at the knee", "A fine silk robe and a lot of perfume", "A large gold ring on one hand", "A hooded robe and a mask", "A robe emblazoned with a holy symbol"];
  const The_cultist_is = ["Humming an eerie incantation", "Sweating profusely", "Breathing heavily", "Twitching nervously", "Laughing hysterically", "Muttering under his/her breath", "Coughing up a lung", "Whispering a prayer", "Moving with a limp", "Stinking of wine"];
  const The_cultist_carries = ["A ceremonial dagger", "A book protruding from his or her pocket", "A string of unusual prayer beads", "A club or mace with symbols carved in it", "A tiny scroll of secret prayers", "A large purse"];
  const The_cultist_is_looking_for = ["Ways to impress the cult’s leader", "Tips for seducing the cult’s leader", "Methods to assassinate the cult’s leader", "Something that will impress his/her god", "Something to eat", "Something to kill", "Ways to advance the cult’s goals", "New recruits", "Religious scholars to debate", "A bottle of wine"];
  const The_cultist$$$s_family_and_close_friends_know = ["All about the cult; they are also members.", "Several dark secrets about the cult", "Enough to know that the cult is dangerous", "Very little about the cult, but they dislike what they do know", "Very little about the cult, but they don’t think it sounds too bad", "Absolutely nothing about the cult"];
  const arrayOfArraysEnum ={The_cultist,The_cultist_has,The_cultist_is_wearing,The_cultist_is,The_cultist_carries,The_cultist_is_looking_for,The_cultist$$$s_family_and_close_friends_know};
  const arrayOfArrays = [The_cultist,The_cultist_has,The_cultist_is_wearing,The_cultist_is,The_cultist_carries,The_cultist_is_looking_for,The_cultist$$$s_family_and_close_friends_know];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_DarkElf2 = function(){
  const The_dark_elf_has = ["Bright white hair", "Silver-blonde hair", "Whitish grey hair", "Whitish blonde hair", "Shiny platinum hair", "Pale grey hair"];
  const and = ["Whitish blue eyes", "Pale blue eyes", "Lilac eyes", "Pale violet eyes", "Deep red eyes", "Pale pink eyes"];
  const as_well_as = ["A likable grin", "A delicate laugh", "An amused smirk", "A humorless visage", "A habit of sighing", "An insolent curl to the lip", "A habit of pacing", "A habit of scratching the back of the neck"];
  const The_dark_elf_is = ["A deadly assassin", "A death-marked heretic", "An ambitious mage", "A messenger on an errand", "A powerful, high-ranking priestess", "An eager, novice priestess", "A capable scout", "A battle-hardened soldier", "A patient and calculating spy", "A devoted guardian", "A peerless gemcutter", "A secretive merchant"];
  const The_dark_elf_is_looking_to = ["Track an aberrant beast", "Investigate the disappearance of a comrade", "Lead any travelers into a dangerous trap", "Locate the lair of a legendary spider", "Find some knowledge about an ancient event or place", "Prove his or her worth to a priestess back home", "Avoid any other dark elves", "Avoid any high elves or wood elves", "Kill some goblins", "Share some wine while prying for secrets"];
  const The_dark_elf_carries = ["An ancient wand or staff", "A unique gem or piece of jewelry", "A finely-crafted short sword or crossbow", "A tome of dark lore", "A pair of matching short swords", "A half dozen sharp daggers", "Several doses of deadly poisons", "A staff or sword with a spiderweb pattern etched along its length", "A pet spider", "A trophy from a foe he or she killed"];
  const arrayOfArraysEnum ={The_dark_elf_has,and,as_well_as,The_dark_elf_is,The_dark_elf_is_looking_to,The_dark_elf_carries};
  const arrayOfArrays = [The_dark_elf_has,and,as_well_as,The_dark_elf_is,The_dark_elf_is_looking_to,The_dark_elf_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_DemonicB = function(){
  const The_beast_appears_in_the_form_of = ["A manticore", "An ape", "A scorpion", "A boar", "A spider", "A drake", "A vulture", "A goat", "A wolf", "A horse", "A worm", "A hyena"];
  const The_beast_has = ["Glowing red eyes", "Dark, sinister eyes", "Unsettling stripes or markings", "Unusually long, sharp claws or talons", "A pincer where you expect a claw or foot", "Huge horns or tusks", "An unwholesome odor", "An odor of decay"];
  const and = ["Powerful hind legs for leaping and pouncing", "A slavering maw", "Rows of wicked looking teeth", "Vicious fangs", "Bony spikes running down its back", "Fins or ridges running down its back", "Black or grey, leathery wings", "A ferocious howl or roar"];
  const The_beast_is_looking_for = ["Blood to spill", "Bones to crunch", "A soul to burn", "A soul to devour", "A fight", "The loathsome mage who summoned it"];
  const arrayOfArraysEnum ={The_beast_appears_in_the_form_of,The_beast_has,and,The_beast_is_looking_for};
  const arrayOfArrays = [The_beast_appears_in_the_form_of,The_beast_has,and,The_beast_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Desert = function(){
  const You_find = ["A cavern in a canyon wall", "A cave entrance, hidden by a boulder", "A small cave in a volcanic rock formation", "A large pit that periodically bleches fire", "A hole under a large boulder", "A large burrow, next to a lava flow", "A secluded monastery atop a steaming volcano", "A temple ruin", "A village of savage canyon dwellers", "A peculiar tent", "A stone house sheltered by a canyon, gorge, or bluff", "An abandoned stone house near a spring", "Some nomads’ camp near a steam vent", "An abandoned campsite", "A merchant caravan’s camp", "Ruins of an ancient city", "An old watchtower", "An old mine that reeks of brimstone", "An active mining camp", "An ancient tomb"];
  const You_see = ["An oasis with only a puddle of water", "An oasis with a burnt tree", "An unusually large, prickly desert plant", "A pair of prickly plants from the same root", "A patch of desert flowers in a shady spot", "A patch of coarse grass in the shadow of a large boulder", "A rocky bluff", "A boulder shaped like a face", "A pair of identical boulders, side by side", "A boulder sitting atop a larger boulder", "A small, dry, rocky canyon", "A deep canyon with steam vents", "A solid lava river bed", "A bubbling sulfurous spring", "A muddy river bed", "A ridge of wind-eroded rock", "A ridge of jagged rock", "A mostly-buried, ancient monument", "Twelve large stones, arranged in a ring", "A sheer rock wall of volcanic glass"];
  const You_notice = ["A buzzard circles overhead", "A vulture screams", "A scorpion scuttles away", "A large beetle scuttles away", "The smell of sulfur in the air", "A lizard crawls under a rock", "A jackal barks", "A snake slithers away", "A swarm of locusts buzz past", "A rattlesnake sounds", "An unusual bird chirps", "A gentle breeze blows", "The wind blows harder", "The wind kicks up dust", "Small loose stones tumble down a slope", "The smell of ash and smoke", "A prickly plant with scorch marks", "A strange desert flower", "A dead palm tree", "Several small prickly plants"];
  const This_desert_is = ["Boulder-strewn", "Rocky", "Forbidding", "Flat", "Jagged", "Bleak", "Wind-swept", "Rugged"];
  const Beneath_your_feet_the_soil_is = ["Black", "Cracked", "Dusty", "Hard-packed", "Deep red", "Gravelly", "Grey", "Stony"];
  const You_come_upon = ["A flame snake", "A swarm of scorpions", "A giant scorpion", "A giant centipede", "A pack of jackals", "A great beast of elemental fire", "A fire drake", "The ghost of a traveler", "A pair of salamanders", "A pair of bandits", "A band of skeletal warriors", "An barbarian war band", "A phoenix on the wing", "A wyvern on the wing", "A strange hermit", "A lost traveler", "A poor nomad", "A bold prospector", "A conniving fiend", "A terrifying dragon"];
  const You_run_into = ["A rockslide coming down a canyon wall", "Several steam vents, hissing and popping", "A rapidly moving lava flow", "A slow-moving lava river with flame spouts", "Persistent, strong winds kicking up dust", "A sudden, swirling dust storm", "A mirage of a city", "A mirage of an oasis"];
  const The_rains_come_to_this_desert = ["Once a year for a few days straight", "On a few days scattered through the year", "Only during a rare astronomical alignment", "Never; the only water is in hot springs", "Never; it only rains fire in these lands", "Never; this place hasn’t had water in years"];
  const What$$$s_in_the_cave_or_cavern = ["A swarm of beetles", "Lots of fire bats", "Many spider webs", "A pair of orc scouts", "A dragon’s lair", "Some gnolls’ hideout", "Bare rock", "Mummified remains", "Some bandits’ hideout", "A reclusive sorcerer", "Some abandoned mining equipment", "A half-mad prophet"];
  const What$$$s_in_the_hole_or_burrow = ["Centipedes", "A flame snake", "Dry bones", "A spider", "A flameskull", "Beetles", "A fire mephit", "Scorpions"];
  const Who_built_this_monastery = ["An order of elementalist monks", "An order of elementalist monks", "An order of demonic monks", "An order of demonic monks", "An order of shadow monks", "An order of warrior monks"];
  const The_temple_was_built_to_honor = ["The god of fire", "The sun god", "The god of war", "The god of death", "A demonic prince", "A forgotten god"];
  const Who_lives_in_the_peculiar_tent = ["A merchant of exotic goods", "A misanthropic shapeshifter", "A reclusive monk", "A refugee far from home", "A half-dragon warrior", "A nomadic sorcerer"];
  const Who_built_the_stone_house = ["A strange hermit", "A reclusive scholar", "An eccentric alchemist", "A rancher with a herd of giant lizards", "A mining prospector", "A heretical outcast priest"];
  const Who_resides_in_the_stone_house_now = ["Flame snakes", "An outcast azer", "A fugitive slave", "Salamander brutes", "Restless ghosts", "A mad sorcerer", "An evil witch", "A wild shapeshifter"];
  const Who_built_the_ancient_ruins = ["A fiendish cult", "A fire giant clan", "A dragon cult", "An ambitious djinn", "An efreet lord", "A high elf prince", "A dark sorcerer", "A forgotten empire", "Priests of fire", "Elementalist monks"];
  const Who_lives_in_the_ancient_ruins_now = ["A clan of fire giants", "A master martial artists", "An exiled djinn", "Cursed mummies", "Restless ghosts", "A salamander war band", "A clan of half-dragon refugees", "A territorial giriffon", "A pair of manticores", "A dragon"];
  const What_built_the_watchtower = ["A long-forgotten empire", "An order of elementalist monks", "Azer slaves from a past age", "An elemental lord’s army", "An ancient elf-witch", "A legendary wizard"];
  const Who_holds_the_watchtower_now = ["The_last_remnant_of_a_defeated_army","An_order_of_holy_knights","A_clan_of_fire_giants","A_hobgoblin_war_party","A_fiendish_presence","Drakes_at_ground_level_fire_bats_up_above"];
  const Who_camped_here = ["An_orkish_war_party","A_fire_giant_raiding_party","Some_miners_or_prospectors","A_merchant_caravan","Some_refugees_or_fugitives","Someone_whose_purposes_are_unclear"];
  const Who_is_or_was_mining_here = ["Greedy dwarves", "Ambitious humans", "An elemental cult", "Industrious kobolds", "A merchant guild", "Slaves of an efreet"];
  const They_were_mining_for = ["Copper", "Gold", "Iron", "Lead", "Silver", "Tin"];
  const Whose_soul_or_remains_haunt_the_tomb = ["A dracolich", "A heretical priest", "A tricky thief", "A vengeful king", "A dark queen", "A legendary hero"];
  const arrayOfArraysEnum ={You_find,You_see,You_notice,This_desert_is,Beneath_your_feet_the_soil_is,You_come_upon,You_run_into,The_rains_come_to_this_desert,What$$$s_in_the_cave_or_cavern,What$$$s_in_the_hole_or_burrow,Who_built_this_monastery,The_temple_was_built_to_honor,Who_lives_in_the_peculiar_tent,Who_built_the_stone_house,Who_resides_in_the_stone_house_now,Who_built_the_ancient_ruins,Who_lives_in_the_ancient_ruins_now,What_built_the_watchtower,Who_holds_the_watchtower_now,Who_camped_here,Who_is_or_was_mining_here,They_were_mining_for,Whose_soul_or_remains_haunt_the_tomb};
  const arrayOfArrays = [You_find,You_see,You_notice,This_desert_is,Beneath_your_feet_the_soil_is,You_come_upon,You_run_into,The_rains_come_to_this_desert,What$$$s_in_the_cave_or_cavern,What$$$s_in_the_hole_or_burrow,Who_built_this_monastery,The_temple_was_built_to_honor,Who_lives_in_the_peculiar_tent,Who_built_the_stone_house,Who_resides_in_the_stone_house_now,Who_built_the_ancient_ruins,Who_lives_in_the_ancient_ruins_now,What_built_the_watchtower,Who_holds_the_watchtower_now,d6_Who_camped_here,d6_Who_is_or_was_mining_here,They_were_mining_for,Whose_soul_or_remains_haunt_the_tomb];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Disease = function(){
  const This_disease_is_spread_by = ["Inhaling contaminated air", "Drinking contaminated water", "Consuming contaminated food", "Skin-to-skin contact", "Saliva, sweat, mucus, and/or blood", "Sexual contact", "The bite of a fly or tick", "The bite of a rat or bat", "Nothing; it’s a genetic condition", "Nothing; it’s a chronic condition brought on by lifestyle choices", "Mysterious, magic-related means", "Unknown means"];
  const Once_exposed_to_the_disease_a_person_develops_symptoms = ["Almost immediately (1d6 hours)", "Very rapidly (4d6 hours)", "Within a few days (1d4 days)", "In the next week (2d4 days)", "In the next few weeks (1d4 wks)", "Some time in the next 2 months (2d4 wks)", "Some time in the next year (2d6 months)", "Some time in the person’s life (2d20 yrs)"];
  const This_disease_is_frequently_encountered_in_regions_with = ["A cold climate", "A warm climate", "A damp climate", "An arid climate", "Swamps / bogs", "A mild climate", "Dense jungles", "A coastal climate", "High altitude", "A temperate climate"];
  const Affect_the = ["Eyes INLINE", "Brain INLINE", "Chest INLINE", "Ears and throat INLINE", "Head and nose INLINE", "Limbs INLINE", "Mouth INLINE", "Sex organs INLINE", "Skin INLINE", "Stomach and gut INLINE"];
  const Eyes = ["blurred vision", "light sensitivity", "puffiness", "poor night vision", "watery eyes", "yellow discharge", "double vision", "difficulty focusing"]; 
  const Brain = ["changes in mood", "dissociative fugues", "dizziness", "drowsiness", "headaches", "insomnia", "nightmares", "shortened attention span"]; 
  const Chest = ["chest pain", "congestion", "coughing fits", "hives", "wheezing", "shortness of breath", "coughing up blood", "tightness in chest"]; 
  const Ears_and_throat = ["excessive ear wax", "difficulty swallowing", "swollen glands", "sore throat", "hearing loss", "vertigo", "bleeding from the ears", "loss of voice"]; 
  const Head_and_nose = ["dry scalp", "hair loss", "pimples", "sinus pressure", "sneezing", "swollen cheeks", "runny nose", "bleeding from the nose"]; 
  const Limbs = ["achiness", "joint pain", "muscle spasms", "restlessness", "stiff joints", "weakness", "discoloration of the fingernails or toenails", "bruising"]; 
  const Mouth = ["bleeding gums", "canker sores", "cracked lips", "dry mouth", "foamy, excessive salivation", "tooth pain", "tooth discoloration", "tooth decay"]; 
  const Sex_organs = ["loss of desire", "pale discharge", "inability to climax", "open sores", "pain during urination", "warts", "itchy bumps", "bloody discharge"]; 
  const Skin = ["black or purple spots", "boils", "itchiness", "pale or yellow hue", "peeling", "rash", "red spots", "scales"]; 
  const Stomach_and_gut = ["loss of appetite", "constipation", "excessive flatulence", "loose stool", "bloody stool", "nausea and vomiting", "ulcers, ", "vomiting blood"]; 
  const May_include = ["Amnesia; partial or complete", "Blindness or deafness", "Coma INLINE", "Complete changes in personality", "Concurrent vomiting and diarrhea", "Coughing up blood", "Delusions and paranoia", "Extreme, persistent nausea", "Fits of narcolepsy", "Hallucinations", "Insomnia", "Lengthy fits of high fever", "Loss of muscle coordination", "Paralysis; partial or complete", "Periodic, temporary loss of consciousness", "Sleep walking", "Susceptibility to other illnesses", "Tumors or tumor-like growths", "Wild mood swings", "Sudden aversion to one or more familiar foods, individuals, or objects"];
  const Coma = ["short-term", "long-term", "indefinite"]; 
  const Symptoms_are = ["Acute and curable; once the afflicted is cured, the symptoms never return", "Acute and curable; once the afflicted is cured, the symptoms never return", "Acute but recurring; once the afflicted is cured, symptoms may return later in life", "Chronic but completely curable; once the afflicted is cured, symptoms rarely return", "Chronic but completely curable; once the afflicted is cured, symptoms rarely return", "Chronic but treatable; after treatment, symptoms will reoccur every few years"];
  const If_untreated_cases_are = ["Rarely serious; running its course in a few days or weeks", "Rarely lethal; fatal complications occur in less than 1% of cases", "Sometimes lethal; fatal complications occur in approximately 10% of cases", "Sometimes debilitating, but rarely lethal; permanent disabilities occur in approximately 10% of cases, and fatal complications in less than 1% of case", "Often debilitating, and sometimes lethal; permanent disabilities occur in more than 50% of cases, and fatal complications in approximately 10% of cases", "Often lethal; fatal complications occur in more than 50% of cases"];
  const The_cure_for_the_disease_is = ["A simple herbal remedy", "A complex herbal potion or salve", "A widely available healing potion or balm", "A rare alchemical concoction", "No known earthly substances", "Basic healing spells and incantations", "Advanced healing spells and potions", "Extremely powerful and rare magic"];
  const Treatment_is_typically = ["Miraculous; symptoms disappear instantly", "Quick; the afflicted is cured within a few hours of receiving treatment", "Short; the afflicted is cured within a few days of receiving treatment", "Lengthy; the afflicted is cured within a few weeks of receiving treatment", "Long-term; the afflicted is cured within a few months of receiving treatment", "Erratic; the time-course of treatment varies greatly among individuals or among outbreaks of the disease"];
  const Supernatural_Symptoms_may_include = ["Belching up vermin", "Demonic or ghostly possession", "The desire to consume humanoid flesh", "The desire to consume rocks or dirt", "The desire to consume pixies and sprites", "The desire to dig a deep hole", "The desire to build an immense wall", "Gaining memories from a long-dead mage", "Gradually morphing into a wild beast", "Gradually morphing into a puddle of ooze", "Imitating the behavior of a common beast", "Loss of the power of speech", "Periodic spells of befuddlement", "Purple or green splotches on the skin", "Rapid growth of facial hair", "Rapid growth of fingernails or teeth", "Rapid hair growth", "Uncontrollable fits of laughter or tears", "Uncontrollable singing or dancing", "Overactive libido"];
  const arrayOfArraysEnum ={This_disease_is_spread_by,Once_exposed_to_the_disease_a_person_develops_symptoms,This_disease_is_frequently_encountered_in_regions_with,Affect_the,May_include,Symptoms_are,If_untreated_cases_are,The_cure_for_the_disease_is,Treatment_is_typically,Supernatural_Symptoms_may_include};
  const arrayOfArrays = [This_disease_is_spread_by,Once_exposed_to_the_disease_a_person_develops_symptoms,This_disease_is_frequently_encountered_in_regions_with,Affect_the,May_include,Symptoms_are,If_untreated_cases_are,The_cure_for_the_disease_is,Treatment_is_typically,Supernatural_Symptoms_may_include];
  const arrayOfInlinesEnum ={Eyes,Brain,Chest,Ears_and_throat,Head_and_nose,Limbs,Mouth,Sex_organs,Skin,Stomach_and_gut,Coma};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Drow = function(){
  const The_dark_elf_is = ["A deadly assassin", "A death-marked heretic", "An ambitious mage", "A messenger on an errand", "A powerful priestess", "A capable scout", "A battle-hardened soldier", "A patient and calculating spy"];
  const The_dark_elf_is_looking_to = ["Track an unnatural beast or invader", "Lead any travelers into a dangerous trap", "Lead any travelers into a dangerous trap", "Find some knowledge about an ancient event or place", "Share some wine while prying for secrets", "Share some wine while prying for secrets"];
  const The_dark_elf_carries = ["An ancient wand or staff", "A unique gem or piece of jewelry", "A unique gem or piece of jewelry", "A finely-crafted short sword or crossbow", "A tome of dark lore", "A tome of dark lore"];
  const arrayOfArraysEnum ={The_dark_elf_is,The_dark_elf_is_looking_to,The_dark_elf_carries};
  const arrayOfArrays = [The_dark_elf_is,The_dark_elf_is_looking_to,The_dark_elf_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Druid = function(){
  const The_druid_is = ["A wildling orphan", "A seasoned herbalist", "A militant environmentalist", "A well-known healer", "A brash, young fool", "A rebellious noble", "A patient teacher", "A mysterious foreigner", "A beautiful maiden", "A rugged outdoorsman", "A veteran wilderness guide", "A beastly brute", "A dark-hearted avenger", "A curious philosopher", "A shy beastfriend", "A fierce guardian", "An exiled spellcaster", "A mystic shaman", "A savage priest or priestess", "A village elder"];
  const The_druid_learned_from = ["Apprenticing to a woodland witch", "Studying wilderness lore at an academy", "A parent who was also a druid", "Running a menagerie or garden for royalty", "Surviving in the wild alone for years", "Conversing with primal spirits", "An enchanted beast", "Studying old books", "The circle of druids that took him/her in as a child", "A fey creature that offered redemption for past transgressions against nature", "A mysterious village elder", "Time spent stranded in a wild, foreign land"];
  const The_druid_has = ["Sky blue eyes", "Deep sea blue eyes", "Bright grass green eyes", "Sunset golden eyes", "Pale moss green eyes", "Muddy brown eyes", "Dark, stormy grey eyes", "Night-sky purple eyes", "Dusty brown eyes", "Stony grey eyes"];
  const and = ["An earthy scent", "Bits of green under the fingernails", "Stains of bird droppings on his/her clothes", "A long, hooked, beak-like nose", "Large bear-like shoulders and hands", "A pointy, rodent-like nose", "Very hairy arms and legs", "Long, sharp fingernails", "Beautiful, healthy skin", "A greenish, mossy beard"];
  const The_druid = ["Stares hungrily like a wolf", "Stares suspiciously like a cat", "Hisses like a snake when he/she laughs", "Barks like a seal when he/she laughs", "Twitters like a bird when he/she laughs", "Walks ponderously like an ox", "Walks gracefully like a panther", "Eats like a horse", "Eats like a bird", "Speaks very little", "Fidgets like a squirrel", "Pounces like a lion"];
  const The_druid_shares_an_especially_close_connection_with = ["Aquatic mammals", "Bears", "Birds of prey", "Cats", "Hoofed mammals", "Reptiles and amphibians", "Songbirds and waterfowl", "Wolves and dogs", "Blizzards and snowstorms", "Hurricanes and tides", "Volcanoes, geysers, and hot springs", "Earthquakes", "Thunderstorms and floods", "Forests and trees", "Mountains and stone", "Caves and shadows", "Jungles and rainstorms", "Glaciers and tundra", "Deserts and sand", "Swamps and marshes"];
  const The_druid_wields = ["A dagger", "A wood staff", "A club and a shield", "A wood club", "A scimitar and a shield", "A scimitar", "A spear and a shield", "A spear"];
  const The_druid_carries = ["A sprig of holly", "A sprig of mistletoe", "A yew wand", "A cutting from a rare plant", "A totem necklace, strung with pieces of beasts INLINE", "A totem rod, adorned with pieces of beasts INLINE", "A totem necklace, strung with plant material INLINE", "A totem rod, adorned with plant material INLINE"];
  const A_totem_necklace_strung_with_pieces_of_beasts = ["beaks", "bones", "claws", "shells", "tiny skulls", "teeth"]; 
  const A_totem_rod_adorned_with_pieces_of_beasts = ["bones", "feathers", "fur", "scales", "a skull", "teeth"]; 
  const A_totem_necklace_strung_with_plant_material = ["seed pods", "dried fruit", "root clippings", "fresh flowers", "fresh leaves", "woven reeds"]; 
  const A_totem_rod_adorned_with_plant_material = ["berries", "tree bark", "fragrant herbs", "fresh leaves", "runes carved into the wood", "seeds and tree sap"]; 
  const The_druid_also_carries = ["A small knife", "A wooden flute", "A hunting horn", "A shard of obsidian, warm to the touch", "A piece of crystal that glows in moonlight", "A small pouch full of seeds", "A small pouch full of herbal tea", "Several vials of herbal extracts", "A pocketbook field guide to flora and fauna in a region the druid has never visited", "A pair of herb snip", "A book of Elvish poems and songs", "Several vials of healing potions"];
  const The_druid_wears = ["Robes of earth tones", "A dark green cape", "Shiny leather boots with fur", "Boots of soft leather", "A leather baldric", "Leather armor decorated with leafy motifs", "Armor made from the hides of beasts", "Leather armor studded with bone", "A robe stained with bird droppings", "A robe with vines growing from its pockets"];
  const The_druid_is_looking_to = ["Find a place where a rare herb grows", "Drive away an unnatural intruder", "Lead intruders into a trap", "Help a wounded, legendary beast", "Permanently transform into a beast", "Locate a legendary garden or grove", "Stop the spread of mining or grazing", "Swap recipes and herb lore", "Bear witness to nature’s awesome power", "Provide a safe haven for a hunted beast", "Inspire a love for nature", "Drink some tea mixed with strong spirits"];
  const arrayOfArraysEnum ={The_druid_is,The_druid_learned_from,The_druid_has,and,The_druid,The_druid_shares_an_especially_close_connection_with,The_druid_wields,The_druid_carries,The_druid_also_carries,The_druid_wears,The_druid_is_looking_to};
  const arrayOfArrays = [The_druid_is,The_druid_learned_from,The_druid_has,and,The_druid,The_druid_shares_an_especially_close_connection_with,The_druid_wields,The_druid_carries,The_druid_also_carries,The_druid_wears,The_druid_is_looking_to];
  const arrayOfInlinesEnum ={A_totem_necklace_strung_with_pieces_of_beasts,A_totem_rod_adorned_with_pieces_of_beasts,A_totem_necklace_strung_with_plant_material,A_totem_rod_adorned_with_plant_material};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Dungeon = function(){
  const The_dungeon_is_located = ["In a tower set apart from the main castle", "Beneath the keep", "In a flanking tower of the castle", "Beneath a flanking tower in the castle", "In a corner tower of the castle", "Beneath a corner tower of the castle"];
  const The_dungeon_was_built = ["As part of the original castle", "As part of the original castle", "As a later addition", "For another purpose originally", "Long before most of the castle", "Long before most of the castle"];
  const The_dungeon_is = ["A sprawling maze of twisting passages", "A sprawling maze of narrow passages", "Organized into small, neat rows of cells or pits", "Organized around a large central cell block or pit", "Only a few rooms", "An endless series of long corridors or ladders", "An endless series of small rooms and staircases", "A series of corridors with very low ceilings"];
  const Prisoners_are_held_within = ["Individual cells, in complete isolation", "Individual cells, but they can see and hear other prisoners", "Individual cells, but they can hear other prisoners", "Cells that accommodate up to two prisoners", "Cells that accommodate up to two prisoners, each shackled to the wall", "Cells that accommodate up to four prisoners", "Cells that accommodate up to four prisoners, each shackled to the wall", "A large chamber with many other prisoners, each shackled to the wall", "Individual pits or wells, open at the top", "One or more huge pit with many other prisoners"];
  const The_walls_and_tunnels_are = ["Well-maintained; the walls are solid", "Well-maintained; the walls are solid", "Aging, but sturdy; the walls have some cracks", "Aging, but sturdy; the walls have some cracks", "Decrepit; the walls are crumbling", "So dark it’s difficult to say"];
  const Prisoners_are_treated = ["Humanely; they receive reasonable meals, some exercise, and healing when needed", "Like dogs; they receive poor quality meals and enough healing to keep them alive", "Like dogs; they receive poor quality meals and enough healing to keep them alive", "Like rats; they receive terrible meals and are plagued by sickness", "Like rats; they receive terrible meals and are plagued by sickness", "Like they don’t exist; occasionally they receive food"];
  const The_dungeon_is_known_for = ["Many deaths during a terrible plague", "A mass escape in the past", "The escape of a famous criminal", "Being the final home of a famous criminal", "Being the final home of a legendary hero", "Being haunted by vengeful ghosts", "Its horrific torture pits", "Never suffering a successful escape", "Its quirky jailer", "The quality of its meals"];
  const According_to_rumor_within_the_castle$$$s_dungeon_lies = ["A secret tunnel to the outside", "The bones of a long-lost hero", "The preserved head of an ancient villain", "A terrible beast to which prisoners are fed", "A missing lord or lady", "A famous jewel stolen by a notorious thief", "A unique and terrible torture device", "The bones of a deposed king or queen"];
  const This_chamber_is = ["A dungeon cell", "Another dungeon cell", "A passageway connecting cell blocks", "A guardroom", "The barracks", "The jailer’s quarters", "A yard or large indoor space for exercise", "A small dining room", "An interrogation room", "A torture chamber"];
  const You_notice = ["A wooden door reinforced with steel bands", "Steel bars where you expected a stone wall", "Empty manacles along the wall", "An empty sconce to hold a torch", "Distant torchlight", "The floor is uneven", "A crack in the stone floor", "A mouse skittering underfoot", "The stench of rotting flesh", "The scent of stale urine", "A putrid smell", "A dank and moldy odor", "An uncomfortable groaning", "A faint scratching sound", "An odd tapping sound", "The squeaking of rats", "The shouting of distant voices", "Howls of agony", "Horrific screams", "The clanking of chains"];
  const You_come_upon = ["A snoozing guard or jailer", "A pair of guards on patrol", "A quartet of guards playing cards or dice on their break", "A pack of trained hunting dogs commanded by a high-ranking guard who has been alerted of the escape attempt", "An inquisitor on-site to interrogate another prisoner about an unrelated case", "An ear-splitting shriek from a maidservant", "A wide, well-lit yard that must be crossed with guards watching it from towers", "A high wall directly in the path of escape", "A barred window in the path of escape", "The rat-infested kitchens", "An imprisoned nobleman who offers to help if you help him escape", "An imprisoned thief who is bent on revenge"];
  const Even_if_you_make_it_out_of_the_dungeon_you$$$ll_never_escape_because = ["The castle’s huntsman will ride you down", "The castle’s hunting hounds are peerless", "The castle’s ghosts will shriek in alarm", "The knights sworn to the castle’s liege will not rest until they return you to him or her", "The castle’s archers will fill you with arrows", "You’ve been branded a prisoner of this place; no one will risk helping you"];
  const arrayOfArraysEnum ={The_dungeon_is_located,The_dungeon_was_built,The_dungeon_is,Prisoners_are_held_within,The_walls_and_tunnels_are,Prisoners_are_treated,The_dungeon_is_known_for,According_to_rumor_within_the_castle$$$s_dungeon_lies,This_chamber_is,You_notice,You_come_upon,Even_if_you_make_it_out_of_the_dungeon_you$$$ll_never_escape_because};
  const arrayOfArrays = [The_dungeon_is_located,The_dungeon_was_built,The_dungeon_is,Prisoners_are_held_within,The_walls_and_tunnels_are,Prisoners_are_treated,The_dungeon_is_known_for,According_to_rumor_within_the_castle$$$s_dungeon_lies,This_chamber_is,You_notice,You_come_upon,Even_if_you_make_it_out_of_the_dungeon_you$$$ll_never_escape_because];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_DwarfMine = function(){
  const The_dwarf_is = ["A greedy prospector", "A hard-working miner", "A talented weaponsmith", "A meticulous gemcutter", "A highly-skilled armorer", "A capable stonemason", "A battle-hardened soldier", "A fearsome berserk warrior"];
  const The_dwarf$$$s_beard_is = ["Tangled", "Snowy white", "Braided", "Stony grey", "Down to the floor", "Fiery red", "Neatly trimmed", "Black as coal", "Magnificent", "Earthy brown"];
  const The_dwarf_is_looking_to = ["Re-establish an ancestral claim", "Find a new source for precious gems", "Find some knowledge about an ancient event or place", "Drink some ale and swap tales of treasure", "Drink some ale and sing a bawdy song", "Drink some ale and start a fight"];
  const The_dwarf_carries = ["An old battleaxe with a razor sharp edge", "A highly polished warhammer", "Several handaxes and a crossbow", "A hammer and sack full of climbing gear", "A pick-ax and an old map", "A satchel of potions, tonics, and remedies"];
  const arrayOfArraysEnum ={The_dwarf_is,The_dwarf$$$s_beard_is,The_dwarf_is_looking_to,The_dwarf_carries};
  const arrayOfArrays = [The_dwarf_is,The_dwarf$$$s_beard_is,The_dwarf_is_looking_to,The_dwarf_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_EnchantedForest = function(){
  const You_find = ["A cavern behind a waterfall", "An entrance to a rocky cave", "A large burrow with a door", "A small cave in the bank of a creek", "A peculiar cottage", "A house under a large tree", "A house up in a tree", "A well-maintained cottage", "A ring of mushrooms", "Ancient ruins", "A reflecting pool between colonnades", "The statue of a goddess on a beautiful marble fountain"];
  const You_see = ["A lush fruit tree", "A large, hollow tree", "A pair of trees from the same root", "A tree growing over a boulder", "A clearing with wildflowers", "A grassy clearing", "A moss-covered boulder", "A thicket of flowering bushes", "A babbling brook", "A brook in a deep ravine", "A brook, with gentle rapids", "A creek with flowers on its bank", "A small pool at a creek's bend", "A patch of mushrooms", "An enormous mushroom", "A large, hollow log", "A large, rotting log", "A tree felled by lightning", "An old gnarled tree", "The stump of an enormous tree"];
  const You_notice = ["A flock of birds scatter", "A hawk cries", "A woodpecker drumming", "An owl hoots", "Birds chirping", "A chipmunk scurrying", "A deer dashes away", "A deer watches curiously", "A squirrel leaps from one tree to another", "A wolf howls", "Butterflies fluttering about", "Squirrels chittering", "Distant music from a harp", "Distant music from a flute", "A warm breeze blows", "A twig snaps", "Brightly, colored berries", "Leaves rustling", "The scent of flowers", "Pixies dancing in the distance"];
  const What$$$s_in_the_cave_or_cavern = ["A bear’s lair", "Lots of bats", "Many spider webs", "A troll's stash", "An ogre's lair", "Some goblins' hideout", "Fragrant mushrooms", "A lingering ghost", "Some lizardfolk’s lair", "The remnant’s of a satyr’s feasting", "A mysterious chest", "A reflecting pool between a pair of beautiful stone colonnades"];
  const You_come_upon = ["A large bear", "A bear wearing a collar", "A giant spider", "A talking spider", "An enormous anthill", "A pack of wolves", "A talking wolf", "A displacer beast", "A moaning ghost", "A mischievous ghost", "A pair of goblin scouts", "A hobgoblin beasthunter", "Several tiny faeries", "A dozen or more pixies", "A protective sprite", "A dancing satyr", "An old witch", "A lost child", "A high elf sage", "A wood elf wanderer"];
  const Who_lives_in_the_burrow_or_under_the_tree = ["Intelligent rabbits", "A giant talking spider", "A talking badger", "A gnomish illusionist", "A gnomish prankster", "A suspicious sprite"];
  const Who_lives_up_in_the_tree = ["A giant owl", "A talking raven", "A wood elf ranger", "A high elf sentinel", "A band of friendly pixies", "Several nervous sprites", "A swarm of sentient butterflies", "It’s not a tree; it’s a treant"];
  const Who_lives_in_the_peculiar_or__wellmaintained_cottage = ["A lonely old gnome", "A reclusive shapeshifter", "A gnomish healer", "A beautiful witch", "A horrible witch", "An outcast dwarf"];
  const Who_built_the_ancient_ruins = ["A great goblin king", "A wood elf king", "A high elf prince", "A dragon cult", "The god of wine himself", "A lizardfolk tribe", "A long-dead emperor", "A forgotten king", "An evil queen", "A dark sorcerer"];
  const Who_lives_in_the_ancient_ruins_now = ["A high elf guardian", "A wood elf druid", "A pack of blink dogs", "Giant spiders", "Restless ghosts", "A wicked satyr", "Hundreds of pixies", "Some wary centaurs", "A cloistered dryad", "A displacer beast", "A pair of manticores", "A dragon"];
  const arrayOfArraysEnum ={You_find,You_see,You_notice,What$$$s_in_the_cave_or_cavern,You_come_upon,Who_lives_in_the_burrow_or_under_the_tree,Who_lives_up_in_the_tree,Who_lives_in_the_peculiar_or__wellmaintained_cottage,Who_built_the_ancient_ruins,Who_lives_in_the_ancient_ruins_now};
  const arrayOfArrays = [You_find,You_see,You_notice,What$$$s_in_the_cave_or_cavern,You_come_upon,Who_lives_in_the_burrow_or_under_the_tree,Who_lives_up_in_the_tree,Who_lives_in_the_peculiar_or__wellmaintained_cottage,Who_built_the_ancient_ruins,Who_lives_in_the_ancient_ruins_now];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_EnemyCamp = function(){
  const The_company$$$s_colors_are = ["Black", "Red / scarlet", "Gold", "Forest green", "Royal blue", "Violet", "Silver / light grey", "Bronze", "Tan / khaki", "Brown / beaver", "Dark grey / gunmetal", "White", "Maroon", "Sky blue", "Navy blue", "Dark brown / chocolate", "Teal / turquoise", "Yellow", "Orange", "Olive green"];
  const The_company$$$s_banner_features = ["A skull", "A clenched fist", "A flame", "A shield", "An arrow", "An axe", "A hammer", "A sword", "The sun", "The moon", "A bear", "A bull", "A dragon", "A falcon", "A lion", "A raven", "A scorpion", "A snake", "A stag", "A wolf"];
  const The_company$$$s_commander_is = ["A brilliant strategist", "A scion from a prominent family", "An outcast from a prominent family", "A dashing swashbuckler", "A brutish thug", "A celebrated war hero", "A disgraced knight", "An anointed knight", "A former arena champion", "A career soldie"];
  const The_company$$$s_attitude_toward_their_commander_is = ["Friendly and loyal", "Respectful and business-like", "Cautious and uncertain", "Terrified and tight-lipped", "Disappointed and disrespectful", "Agitated and restless"];
  const The_company_specializes_in = ["Siege-breaking", "Holding redoubts", "Frontal assaults", "Skirmishes", "Patrolling", "Flanking maneuvers", "Guerilla tactics", "Foraging"];
  const The_company_is_notorious_for = ["Taking no prisoners", "Scarring or branding prisoners", "Incompetence", "Cowardice", "Singing bawdy songs", "Romantic escapades", "Eating everything that is available", "Drinking too much ale and wine"];
  const Most_soldiers_in_the_company_are_outfitted_with = ["Patched leather armor", "Leather armor marked with the symbol of their liege lord", "Helms and breastplates emblazoned with the symbol of their liege lord", "Well-maintained chainmail", "Well-worn scale armor", "Newly-forged scale armor"];
  const Most_soldiers_in_the_company_are_equipped_with = ["Longswords and shortbows", "Longswords and crossbows", "Longswords and shields", "Shortswords and longbows", "Shortswords and shields", "Mornngstars and crossbows", "Battleaxes and handaxes", "Warhammers and shields", "Spears and shields", "Longspears and shortswords", "Pikes and shortswords", "Halberds and handaxes"];
  const Most_soldiers_in_the_company_are = ["Trained men-at-arms", "Militia men", "Veterans of war", "Prisoners of war", "Conscripts from a city", "Conscripts from peasant villages", "Convicted criminals", "Green boys"];
  const arrayOfArraysEnum ={The_company$$$s_colors_are,The_company$$$s_banner_features,The_company$$$s_commander_is,The_company$$$s_attitude_toward_their_commander_is,The_company_specializes_in,The_company_is_notorious_for,Most_soldiers_in_the_company_are_outfitted_with,Most_soldiers_in_the_company_are_equipped_with,Most_soldiers_in_the_company_are};
  const arrayOfArrays = [The_company$$$s_colors_are,The_company$$$s_banner_features,The_company$$$s_commander_is,The_company$$$s_attitude_toward_their_commander_is,The_company_specializes_in,The_company_is_notorious_for,Most_soldiers_in_the_company_are_outfitted_with,Most_soldiers_in_the_company_are_equipped_with,Most_soldiers_in_the_company_are];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_FaerieFolk = function(){
  const The_faerie_is = ["A capricious nymph", "An apprehensive nymph", "A nervous pixie", "A cheerful pixie", "A wrathful sprite", "A curious sprite", "A drunken satyr", "A satyr bully"];
  const The_faerie_is_looking_for = ["An unnatural creature that has taken up residence in the forest", "Ways to cause mischief for travelers", "Worthy visitors of a secret grove", "Someone to listen to a new song", "A dance partner", "A drinking partner"];
  const The_faerie_carries = ["An delicate wreath of flowers", "A gem glowing with moonlight or starlight", "A finely-crafted bow or knife", "A vial containing a potent potion", "Several magical mushrooms", "A message from a faerie king or queen", "A musical instrument INLINE", "A jug of wine"];
  const A_musical_instrument = ["flute", "flute", "harp", "harp", "horn", "pipes"]; 
  const arrayOfArraysEnum ={The_faerie_is,The_faerie_is_looking_for,The_faerie_carries};
  const arrayOfArrays = [The_faerie_is,The_faerie_is_looking_for,The_faerie_carries];
  const arrayOfInlinesEnum ={A_musical_instrument};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_FeyB = function(){
  const The_beast_is = ["An owlbear", "A bear", "A panther", "A beaver", "A songbird", "A boar", "A swan", "An elk", "A toad", "A hawk", "A wolf", "An owl"];
  const The_beast_has = ["Unusually bright coloration", "Unusual stripes or markings", "Captivating, blue or grey eyes", "Mischievous, green or gold eyes", "A shimmering aura", "A misty aura"];
  const and = ["Moves gracefully, almost dancing", "Darts in and out of hiding places", "Can create an illusory double of itself", "Can teleport short distances", "Speaks in rhymes and riddles", "Speaks in songs", "Gives you an uneasy feeling", "Relishes in playful pranks and hijinks"];
  const The_beast_is_looking_for = ["An answer to an ancient riddle", "A mortal worthy of its service", "A mortal to torment and to tease", "An artifact of an elvish hero of a past age", "The location of an ancient, elvish ruin", "The source of corruption near its home", "The recipient of a specific, secret message", "A new song to sing"];
  const arrayOfArraysEnum ={The_beast_is,The_beast_has,and,The_beast_is_looking_for};
  const arrayOfArrays = [The_beast_is,The_beast_has,and,The_beast_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Fiend = function(){
  const The_fiend_is = ["In the service of a more powerful fiend", "Bound to serve a mortal spellcaster", "Recently freed of its bonds", "Bound to a particularly location", "Recently reborn", "An ancient and powerful being", "Rapidly ascending in rank", "Recently demoted from a position of greater power", "Rampaging after breaking free of its summoner", "A respected and feared lieutenant of a mighty fiend", "A laughingstock among the mighty fiends of its home realm", "Not entirely certain what its purpose and place may be"];
  const The_fiend$$$s_skin_is = ["Dark crimson", "Blood red", "Blackened", "Pale pink", "Sickly grey", "Burnt orange", "Mottled brown", "Orange-ish tan", "Shiny", "Rough", "Fur-covered", "Scaly"];
  const The_fiend$$$s_eyes_are = ["Glowing yellow", "Burning red", "Pitch black", "Deep blue", "White, with no visible pupils", "Toxic green", "Dull grey", "Midnight blue", "Laughing", "Unblinking and hollow", "More often closed than open", "Wide and perceptive"];
  const The_fiend_has = ["A long snout", "Sharp fangs", "The face of a beautiful woman", "Curved horns", "Short horns", "Long, sharp horns", "Blackened horns", "An unsettling grin", "A terrifying scowl", "A constant smirk", "Long, dark hair", "Large ears"];
  const and = ["A well-muscled physique", "A voluptuous feminine shape", "Burnt flesh", "Cracked flesh", "A slender frame", "A thick-set frame", "A tall, bony frame", "A grotesque, obese body", "A lithe, athletic body", "Horrific scars", "Discolored flesh", "Many piercings"];
  const as_well_as = ["A pair of leathery wings", "A pair of feathered wings", "Wings pull close to its body to hide from view", "A scaly tail", "A tail ending in a poisoned stinger", "A forked tail", "An extra pair of arms", "Over-sized pincers in place of hands", "Hooves in place of feet", "Exceptionally long fingernails", "Talons in place of feet", "The body and legs of a beast INLINE"];
  const The_body_and_legs_of_a_beast = ["crocodile", "goat", "lion", "serpent", "spider", "walrus"]; 
  const The_fiend_possesses = ["A missing line from a dark prophecy", "The soul of a celebrated hero trapped in a gem", "The soul of a terrifying villain trapped in a gem", "The true name of a god or goddess", "A contract with an ancient dragon", "A map to the prison of a powerful aberrant being", "A map to the location of a dead god's resting place", "The key to the gates of a destructive realm", "A key to the gates of the realm of the dead", "Knowledge of the location of a lost city", "A book of morbid omens and prophecies", "A book of foul summoning rituals"];
  const The_fiend_prefers_to_fight_with = ["A whip of pure flame", "A sword of elemental lightning", "A cudgel covered in teeth and sharp spikes", "A black steel mace", "A steel sword tempered in blood", "A wicked trident or spear", "Poison-coated arrows", "Life-draining arrows", "Spells and enchantments", "Its minions and thralls", "Its bare fists", "Tooth and claw"];
  const The_fiend_is_looking_for = ["A soul to collect and to keep", "A soul to devour", "Flesh to devour", "Powerful secrets", "A specific person who cheated it", "An artifact from a previous age", "Something to kill", "Something to burn", "An opportunity to usurp the place of its fiendish liege", "An opportunity to prove its value to its fiendish liege", "A lost temple or tomb of story and song", "The means to open a portal to a dark realm"];
  const The_fiend_cannot_resist = ["Breaking things", "Tasty flesh", "Burning things", "A pretty face", "A chance to gloat", "A stiff drink"];
  const The_fiend_is_particularly_fond_of_preying_upon = ["Beautiful young women", "Handsome young men", "Rulers and tyrants", "Poor, simple folk", "Pious, religious folk", "Mighty warriors", "Greedy and ambitious nobles and merchants", "Sad old men and women", "Sailors, pirates, and fishermen", "Desperate outlaws and thieves", "Talented actors and musicians", "Anyone; the fiend enjoys variety"];
  const With_prey_in_its_clutches_the_fiend_prefers_to = ["Dismember its prey savagely", "Devour the flesh of its prey hungrily", "Toy with its prey before killing it", "Seduce its prey before violating the prey sadistically", "Mutilate its prey, leaving a horrifying reminder of the encounter", "Imprison its prey, subjecting it to years of psychological torment", "Torture its prey, keeping it alive and in pain for years", "Trap the soul of its prey in a gem, jar, or other object", "Collect the soul of its prey, sending it along to a fiendish realm", "Mark the soul of its prey, returning to collect it later", "Corrupt its prey, inciting it to commit evil acts", "Devour the soul of its prey, leaving a soulless husk", "Set dates for meetings then arrive late or cancel at the last minute", "Sow discord between its prey and the prey’s companions", "Set dates for meetings and then never show up, apologize profusely, and promise to “make it up to you.", "Lead its prey far afield while important matters are left undecided", "Lie to its prey; painting a rosier picture than reality dictates", "Undermine its prey’s business ventures", "Enter contracts it knows are flawed in its favor to the prey’s detriment", "Make promises to its prey for the sole purpose of breaking them"];
  const To_bind_to_summon_or_to_control_the_fiend_or_to_drive_it_back_to_the_shadow_one_must = ["Speak its true name", "Write its true name in one’s own blood", "Tattoo its true name to one’s breast", "Ritualistically burn a bit of the fiend’s skin", "Graft some of the fiend’s skin to one’s self", "Replace one’s own hand with the fiend’s", "Drink the fiend’s poisonous blood, die from the poison, and be resurrected", "Perform a ritualistic sacrifice of a goat", "Perform a ritualistic sacrifice of a maiden", "Locate the place of the fiend’s birth", "Pay tribute to the fiend’s far more dangerous and powerful liege lord", "Give up; no one’s ever bound this fiend"];
  const arrayOfArraysEnum ={The_fiend_is,The_fiend$$$s_skin_is,The_fiend$$$s_eyes_are,The_fiend_has,and,as_well_as,The_fiend_possesses,The_fiend_prefers_to_fight_with,The_fiend_is_looking_for,The_fiend_cannot_resist,The_fiend_is_particularly_fond_of_preying_upon,With_prey_in_its_clutches_the_fiend_prefers_to,To_bind_to_summon_or_to_control_the_fiend_or_to_drive_it_back_to_the_shadow_one_must};
  const arrayOfArrays = [The_fiend_is,The_fiend$$$s_skin_is,The_fiend$$$s_eyes_are,The_fiend_has,and,as_well_as,The_fiend_possesses,The_fiend_prefers_to_fight_with,The_fiend_is_looking_for,The_fiend_cannot_resist,The_fiend_is_particularly_fond_of_preying_upon,With_prey_in_its_clutches_the_fiend_prefers_to,To_bind_to_summon_or_to_control_the_fiend_or_to_drive_it_back_to_the_shadow_one_must];
  const arrayOfInlinesEnum ={The_body_and_legs_of_a_beast};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_FireB = function(){
  const The_beast_is = ["A hawk", "A basilisk", "A hound", "A bat", "A lizard", "A beetle", "A scorpion", "A drake", "A serpent", "A fox", "A worm", "A griffon"];
  const The_beast_has = ["Glowing red eyes", "Bright, golden eyes", "Reddish skin around the face", "A blackened beak or set of teeth", "An burnt odor", "An odor of brimstone", "An aura of flickering flames", "An aura of choking smoke"];
  const and = ["Exhales smoke when it breathes", "Can exhale a spout of flame", "Gives off an uncomfortable amount of heat", "Leaves a trail of flames in its wake", "Can set things ablaze with a touch", "Can disappear in a blinding flash of fire", "Explodes in a fiery cloud if it is slain", "Sheds dim, orange light"];
  const The_beast_is_looking_for = ["Something to burn and to consume", "A lair with walls that can withstand flames", "An individual marked by its master", "An opportunity to impress its master", "The scorched skull of a long-dead fire titan", "An item that grants mastery over flames"];
  const arrayOfArraysEnum ={The_beast_is,The_beast_has,and,The_beast_is_looking_for};
  const arrayOfArrays = [The_beast_is,The_beast_has,and,The_beast_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Fisherfolk = function(){
  const The_fisher_fishes_in = ["A quiet creek", "A wide river", "A small pond", "A large lake", "A swamp", "A marsh", "A protected bay", "A natural harbor", "A narrow channel", "The open ocean"];
  const The_fisher_typically_fishes_from = ["A sandy or rocky beach", "An embankment, sandbar, or levee", "A pier or bridge", "His/her own boat", "A boat owned by someone else", "Wherever the fish can be reached"];
  const The_fisher_uses = ["A rod and reel with a baited hook", "A rod and reel with a lure", "Baited lines", "Baited traps", "Nets", "Baited lines and nets", "Baited lines and baited traps", "An unusual technique INLINE"];
  const An_unusual_technique = ["harpoon", "harpoon", "spear", "spear", "bare hands", "trained beast"]; 
  const The_fisher_prefers_to_fish = ["Alone, in silence", "Alone, while whistling or humming", "Alone, but within earshot of other fishermen", "With a trusted partner", "With an apprentice fisherman", "With an experienced fisherman"];
  const The_fisher_is_seeking = ["A new apprentice", "The answer to a riddle", "To tell the tale of the one that got away", "Rumors of new locations to fish", "Revenge against a rival", "Assistance repairing a boat, net, or some other fishing gear", "Fishing companions", "Drinking companions"];
  const The_fisher_has = ["An anchor tattoo", "A pair of crossed bones tattoo", "A fish tattoo", "An octopus tattoo", "A whale tattoo", "A lobster tattoo", "A mermaid tattoo", "A dragon tattoo"];
  const and = ["A wooden pipe", "Rotten teeth", "A gold tooth", "A terrible scar on the forearm", "A handkerchief tied atop the head", "Wild eyes", "A trimmed black beard", "A long, hooked nose", "An open shirt and a very hairy chest", "Long mutton chop sideburns"];
  const arrayOfArraysEnum ={The_fisher_fishes_in,The_fisher_typically_fishes_from,The_fisher_uses,The_fisher_prefers_to_fish,The_fisher_is_seeking,The_fisher_has,and};
  const arrayOfArrays = [The_fisher_fishes_in,The_fisher_typically_fishes_from,The_fisher_uses,The_fisher_prefers_to_fish,The_fisher_is_seeking,The_fisher_has,and];
  const arrayOfInlinesEnum ={An_unusual_technique};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_FishingBoat = function(){
  const The_boat_is = ["A flat raft", "A pontoon raft", "A canoe", "A coracle", "A drifter", "A buss"];
  const The_boat_can = ["Easily be operated by one person", "Be operated by one person, but some flaw or damage has made handling difficult", "Be operated by one person, but some flaw or damage has made handling difficult", "Be operated by two people, but it can be handled by one with difficulty", "Be operated by two people, but it can be handled by one with difficulty", "Be operated by three or more people, but it can be handled by two with difficulty"];
  const Presently_the_boat_is = ["Laden with the latest catch", "Well-stocked with bait and gear and ready to go", "In tip-top shape", "In need of repair", "Barely staying afloat", "Resting beneath the waves"];
  const The_boat$$$s_hull_markings_feature = ["A ghost", "A mermaid", "A shark", "A pelican", "A whale", "An octopus", "A swordfish", "A crab", "A sea turtle", "A big tuna"];
  const arrayOfArraysEnum ={The_boat_is,The_boat_can,Presently_the_boat_is,The_boat$$$s_hull_markings_feature};
  const arrayOfArrays = [The_boat_is,The_boat_can,Presently_the_boat_is,The_boat$$$s_hull_markings_feature];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Forest = function(){
  const You_find = ["A cavern behind a waterfall", "A small cave in the bank of a creek", "An entrance to a rocky cave", "A hole under a large tree", "A large burrow", "A peculiar cottage", "A woodsman's cabin", "An abandoned cabin", "An abandoned campsite", "A sacred grove", "A grave with an illegible headstone", "Ancient ruins"];
  const You_see = ["A fruit tree", "A large, hollow tree", "A pair of trees from the same root", "A tree growing over a boulder", "A clearing with wildflowers", "A grassy clearing", "A moss-covered boulder", "A thicket of brambles", "A babbling brook", "A brook in a deep ravine", "A brook, with gentle rapids", "A dry creekbed", "A small pool at a creek's bend", "A patch of mushrooms", "An enormous mushroom", "A large, hollow log", "A large, rotting log", "A tree felled by lightning", "An old gnarled tree", "The stump of an enormous tree"];
  const You_notice = ["A flock of birds scatter", "A hawk cries", "A woodpecker drumming", "An owl hoots", "Birds chirping", "A chipmunk scurrying", "A deer dashes away", "A deer watches curiously", "A squirrel leaps from one tree to another", "A wolf howls", "Butterflies fluttering about", "Squirrels chittering", "An eerie silence", "The breeze stops", "The wind blows harder", "A twig snaps", "Brightly, colored berries", "Leaves rustling", "The scent of flowers", "The smell of decay"];
  const What$$$s_in_the_cave_or_cavern = ["A bear’s lair", "Lots of bats", "Many spider webs", "A troll's stash", "An ogre's lair", "Some goblins' hideout", "Some abandoned mining equipment", "Bare rock", "A potable spring", "Unidentifiable remains", "Some outlaws’ hideout", "A strange hermit"];
  const You_come_upon = ["A large bear", "A bear cub", "A giant spider", "Several giant spiders", "A pack of wolves", "A lone wolf", "A hunting cat", "A wailing ghost", "A malevolent ghost", "A pair of goblin scouts", "A goblin patrol", "An ogre", "A pair of outlaws", "A beggarly bandit", "An old witch", "A curious herbalist", "A lost child", "A woodcutter busy with the day’s work", "An intrepid hunter", "An elvish ranger"];
  const Many_of_the_trees_are = ["Apple or pear trees", "Ashes", "Birches", "Beeches", "Cedars or junipers", "Cherry or plum trees", "Chestnut or hazel trees", "Cypresses", "Elms", "Firs", "Hawthorns or hemlocks", "Hickory or walnut trees", "Linden or lime trees", "Maples", "Oaks", "Pines", "Poplars", "Spruces", "Willows", "Yew or holly trees"];
  const What$$$s_in_the_hole_or_burrow = ["A snake", "A spider", "A badger", "Earthworms", "A centipede", "Unusual fungus"];
  const Who_lives_in_the_peculiar_cottage = ["A lonely old woman", "A reclusive shapeshifter", "An eccentric healer", "A beautiful witch", "A horrible witch", "An outcast dwarf"];
  const Who_lived_in_the_abandoned_cabin = ["A lonely old woman", "A reclusive scholar", "an eccentric healer", "A poor woodcutter", "A fur trader", "A dwarf prospector"];
  const Who_resides_in_the_abandoned_cabin_now = ["An owlbear", "An ogre", "A troll", "A mad witch", "A paranoid shapeshifter", "Restless ghosts"];
  const Who_built_the_ancient_ruins = ["Dwarvish miners", "A wood elf king", "A high elf prince", "A dragon cult", "A death cult", "Shadow monks", "A long-dead emperor", "A forgotten king", "An evil queen", "A dark sorcerer"];
  const Who_lives_in_the_ancient_ruins_now = ["A dwarf prospector", "A wood elf druid", "Poisonous snakes", "Giant spiders", "Hungry zombies", "Restless ghosts", "A handful of ogres", "Some irritable trolls", "A pair of manticores", "A dragon"];
  const arrayOfArraysEnum ={You_find,You_see,You_notice,What$$$s_in_the_cave_or_cavern,You_come_upon,Many_of_the_trees_are,What$$$s_in_the_hole_or_burrow,Who_lives_in_the_peculiar_cottage,Who_lived_in_the_abandoned_cabin,Who_resides_in_the_abandoned_cabin_now,Who_built_the_ancient_ruins,Who_lives_in_the_ancient_ruins_now};
  const arrayOfArrays = [You_find,You_see,You_notice,What$$$s_in_the_cave_or_cavern,You_come_upon,Many_of_the_trees_are,What$$$s_in_the_hole_or_burrow,Who_lives_in_the_peculiar_cottage,Who_lived_in_the_abandoned_cabin,Who_resides_in_the_abandoned_cabin_now,Who_built_the_ancient_ruins,Who_lives_in_the_ancient_ruins_now];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_FreshWaterCatch = function(){
  const Coldwater_catch_You_haul_in = ["A bass (fights)", "A carp", "An eel", "An oyster", "A perch", "A salmon", "A smelt", "A sturgeon", "A trout", "A walleye"];
  const Warmwater_catch_You_haul_in = ["A carp", "A catfish (fights)", "An eel", "An oyster", "A perch", "A prawn", "A quipper (fights, attacks)", "A salmon", "A tilapia", "A trout"];
  const Swampwater_catch_You_haul_in = ["A bass (fights)", "A catfish (fights)", "A crayfish", "A crocodile (fights, attacks)", "An eel (fights)", "A prawn"];
  const arrayOfArraysEnum ={Coldwater_catch_You_haul_in,Warmwater_catch_You_haul_in,Swampwater_catch_You_haul_in};
  const arrayOfArrays = [Coldwater_catch_You_haul_in,Warmwater_catch_You_haul_in,Swampwater_catch_You_haul_in];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Gladiator = function(){
  const The_gladiator_is = ["A well-trained slave", "A poorly-trained slave", "A seasoned veteran of the arena", "A veteran of warfare", "A prisoner of war", "A political prisoner", "The son of a poor man", "A drunk", "A captured criminal", "A former pirate", "A de-frocked priest", "A favorite among the ladies"];
  const The_gladiator_is_clad_in = ["Nothing", "Leather scraps or exotic beast hides", "A leather baldric or jerkin", "A bronze or iron helm (and no more)", "A breastplate and a helm", "Chainmail"];
  const The_gladiator_is_wielding = ["Two shortswords", "A shortsword and shield", "A spear and shield", "A net and trident or an exotic blade", "A heavy flail or greataxe", "A scimitar and whip"];
  const The_gladiator_fights_with = ["Hit-and-run tactics", "Making a direct assault", "Making a mad charge", "Fancy footwork", "Unpredictable lurches", "Masterful combat maneuvers", "Kicking and stomping", "Lots of taunts and jeers", "Lots of screaming and shouting", "Lots of head-butting"];
  const The_gladiator_is_known_for = ["Dancing atop fallen foes", "Making rude gestures", "Insulting spectators", "Gifting a lady spectator with a flower", "Kneeling to pray after making a kill", "Never speaking a word"];
  const The_gladiator_fights_for = ["The love of the sport", "The love of someone he cannot have", "Pure bloodlust", "A chance to deal out sadistic torment", "A chance at freedom", "A chance at vengeance", "A chance to escape from life imprisonment", "A chance to escape from execution", "A chance at redemption", "God and country", "Fortune and glory", "Strength and honor"];
  const The_gladiator_has_endured_the_tragedy_of = ["A doomed love affair", "The death of a spouse", "The death of a child", "Being wrongfully accused of a crime", "Surviving as a desperate criminal", "Being taken as a prisoner of war"];
  const The_gladiator_has = ["A nose ring or garish earring", "A missing eye or a grisly facial scar", "A look of panic or sadness", "A haughty or eager grin", "Long, beautiful hair or an unruly beard", "Wild sideburns or a long mustache"];
  const On_the_gladiator$$$s_body_is = ["A maritime tattoo INLINE", "A slave tattoo INLINE", "A beast tattoo INLINE", "A brand INLINE", "A festering wound or frightening scar", "An obscene amount of oil or an intimidating amount of hair"];
  const A_maritime_tattoo = ["fish", "ship", "kraken", "mermaid", "octopus", "skull"]; 
  const A_slave_tattoo = ["date", "place", "slave name", "master’s name", "job", "number"]; 
  const A_beast_tattoo = ["bear", "boar", "dragon", "eagle", "lion", "wolf"]; 
  const A_brand = ["brand of a slave", "brand of a soldier", "brand of a sailor"]; 
  const arrayOfArraysEnum ={The_gladiator_is,The_gladiator_is_clad_in,The_gladiator_is_wielding,The_gladiator_fights_with,The_gladiator_is_known_for,The_gladiator_fights_for,The_gladiator_has_endured_the_tragedy_of,The_gladiator_has,On_the_gladiator$$$s_body_is};
  const arrayOfArrays = [The_gladiator_is,The_gladiator_is_clad_in,The_gladiator_is_wielding,The_gladiator_fights_with,The_gladiator_is_known_for,The_gladiator_fights_for,The_gladiator_has_endured_the_tragedy_of,The_gladiator_has,On_the_gladiator$$$s_body_is];
  const arrayOfInlinesEnum ={A_maritime_tattoo,A_slave_tattoo,A_beast_tattoo,A_brand};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_GoblinGang = function(){
  const The_goblins$$$_primary_$$$business$$$_involves = ["Raiding villages and farms", "Burglarizing storehouses and shops", "Harassing anyone who passes through their territory", "Robbing caravans carrying gems, precious metals, and exotic goods", "Holding up traders’ ships or wagons", "Smuggling drugs INLINE", "Smuggling living things (exotic beasts, foreign harlots, fugitives, slaves)", "Serving as muscle for evildoers", "Mining and crafting", "Pranks and hijinks"];
  const Smuggling_drugs = ["smokeleaf", "smokeleaf", "a hallucinogenic mushroom", "a hallucinogenic mushroom", "sleepysalt (a downer). ", "sharpsugar (an upper)"]; 
  const The_goblin_gang$$$s_symbol_is = ["A skull", "An arrow", "A dagger", "The moon", "A star", "A snake", "A spider", "A rat", "A wolf", "A bat"];
  const The_goblins$$$_lair_is_located = ["In a dark and haunted forest", "In an enchanted forest", "Along a mountain pass", "High in the mountains", "Beneath a bustling city", "Near a quiet farm village"];
  const The_goblins$$$_lair_is = ["A series of natural caverns", "An abandoned mine", "A mine in which the goblins are actively digging", "An underground fortress", "A semi-organized military encampment", "A crude encampment"];
  const The_goblins_are_particularly_fond_of_picking_on = ["Fishermen and sailors", "Beggars and drunks", "Merchants and moneychangers", "Young noblemen", "Young noblewomen", "Old noblewomen", "Gamblers and thieves", "Priests and monks", "Priestesses", "Constables and sheriffs", "Castle or town guards", "Servants and slaves", "Barkeeps and maids", "Harlots and madames", "Circus performers", "Foreign travelers and peasant girls", "Young children", "Miners and prospectors", "Elves and rangers", "Dwarves and gnomes"];
  const The_goblins$$$_are_currently_planning_a_raid_on = ["The residence of the leader or a senior gangmember", "An artisan's shop or guildhall", "A merchant's office", "A tavern or inn", "A brothel", "A warehouse or shipyard", "A temple complex or shrine", "The town hall", "The residence of a wealthy individual or prominent citizen", "A shantytow"];
  const The_goblins$$$_boss_is = ["An egotistical goblin warrior", "A charismatic goblin rogue", "A mysterious goblin shaman", "A talented goblin thief", "A well-known goblin war hero", "A ruthless goblin hexer", "A cunning gobliness", "A brutal hobgoblin warpriest", "A brilliant hobgoblin warlord", "A calculating bugbear assassin"];
  const The_goblins$$$_goals_include = ["Disruption of the region’s politics", "Disruption of the region’s trade", "Revenge against a specific organization", "Revenge against a rival goblin gang", "Spreading chaos and destruction", "Possession of a powerful artifact"];
  const The_goblins_typically_fight_with = ["Swarm tactics", "Hit-and-run tactics", "Ambush tactics", "Choreographed maneuvers", "Unpredictable maneuvers", "Lots of smiles and jokes", "Lots of fancy footwork", "Lots of screaming and shouting", "Kicking and stomping", "Lots of head-butting", "Lots of biting and scratching", "Laying traps"];
  const As_enforcers_or_extra_muscle_the_goblins_sometimes_hire = ["Hobgoblin mercenaries", "Bugbear thugs", "Ogre savages", "Orc berserkers", "Trolls", "Other goblin gangs"];
  const As_guardians_or_pets_the_goblins_sometimes_keep = ["Wolves", "Wargs", "Giant spiders", "Boars", "Giant bats", "Dire rats"];
  const arrayOfArraysEnum ={The_goblins$$$_primary_$$$business$$$_involves,The_goblin_gang$$$s_symbol_is,The_goblins$$$_lair_is_located,The_goblins$$$_lair_is,The_goblins_are_particularly_fond_of_picking_on,The_goblins$$$_are_currently_planning_a_raid_on,The_goblins$$$_boss_is,The_goblins$$$_goals_include,The_goblins_typically_fight_with,As_enforcers_or_extra_muscle_the_goblins_sometimes_hire,As_guardians_or_pets_the_goblins_sometimes_keep};
  const arrayOfArrays = [The_goblins$$$_primary_$$$business$$$_involves,The_goblin_gang$$$s_symbol_is,The_goblins$$$_lair_is_located,The_goblins$$$_lair_is,The_goblins_are_particularly_fond_of_picking_on,The_goblins$$$_are_currently_planning_a_raid_on,The_goblins$$$_boss_is,The_goblins$$$_goals_include,The_goblins_typically_fight_with,As_enforcers_or_extra_muscle_the_goblins_sometimes_hire,As_guardians_or_pets_the_goblins_sometimes_keep];
  const arrayOfInlinesEnum ={Smuggling_drugs};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Graverobber = function(){
  const The_graverobber_is = ["A veteran treasure hunter", "A desperate thief", "A desperate thief", "A reckless fortune seeker", "A reckless fortune seeker", "A student of anatomy"];
  const The_graverobber_is_looking_for = ["A fresh grave", "The entrance to an ancient crypt", "A pair of strong arms to help dig", "A pair of strong arms to help dig", "A drink and a break from digging", "A drink and a break from digging"];
  const The_graverobber_carries = ["A sturdy shovel and a dirty handkerchief", "A sturdy shovel and a dirty handkerchief", "Several over-sized sacks", "Several over-sized sacks", "An ornately crafted lantern", "A pocketbook of notes on gravesites"];
  const arrayOfArraysEnum ={The_graverobber_is,The_graverobber_is_looking_for,The_graverobber_carries};
  const arrayOfArrays = [The_graverobber_is,The_graverobber_is_looking_for,The_graverobber_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_GuardPrison = function(){
  const The_guard_took_this_job_for = ["The steady pay", "The steady pay", "The chance to bully others", "The chance to bully others", "To prove how tough he is", "To take out his aggression on criminals"];
  const On_the_guard$$$s_face_is = ["An unsightly scar", "A stupid grin", "A stupid grin", "A blank stare", "A blank stare", "A bushy mustache"];
  const arrayOfArraysEnum ={The_guard_took_this_job_for,On_the_guard$$$s_face_is};
  const arrayOfArrays = [The_guard_took_this_job_for,On_the_guard$$$s_face_is];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Harlot = function(){
  const The_harlot_is = ["A veteran who may have been beautiful", "A passionate young woman", "A homely young lady", "A friendly and plump woman", "The bastard daughter of a noble house", "A young foreigner", "The boss’s favorite", "An exotic beauty", "New to the place and always in trouble", "New to the place and eager to please"];
  const The_harlot_has = ["A pretty smile", "Beautiful eyes", "Lovely, long eyelashes", "Lush, curly locks", "Short-cropped hair", "A clean satin gown"];
  const and = ["A gimpy leg", "Crooked teeth", "A scowl on her face", "An unsightly scar", "An unfortunately shaped nose", "A large mole on her face", "Crossed-eyes", "A mustache"];
  const The_harlot$$$s_flaw_is = ["Barely noticeable", "Barely noticeable", "Well-concealed by make-up or practice", "Well-concealed by make-up or practice", "Something you can look past", "Intimidating"];
  const The_harlot_is_very_skilled_at = ["Listening and offering emotional support", "Bringing a smile to her clients’ faces without even touching them", "Bringing a smile to her clients’ faces as soon as she touches them", "Embroidery and sewing", "Cooking and cleaning", "Drinking and swearing"];
  const The_harlot_is_looking_to = ["Earn enough coin to get out of this place", "Earn enough coin to get out of this place", "Bring to light a scandal involving a rival", "Secure a marriage to get out of this place", "Secure a marriage to get out of this place", "Hear word of a child given away"];
  const arrayOfArraysEnum ={The_harlot_is,The_harlot_has,and,The_harlot$$$s_flaw_is,The_harlot_is_very_skilled_at,The_harlot_is_looking_to};
  const arrayOfArrays = [The_harlot_is,The_harlot_has,and,The_harlot$$$s_flaw_is,The_harlot_is_very_skilled_at,The_harlot_is_looking_to];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_HauntedForest = function(){
  const You_find = ["Ancient burial mounds", "An entrance to a rocky cave", "A hole under a large tree", "A large burrow", "A peculiar cottage", "A forgotten cemetery", "A pair of graves", "An abandoned cabin", "An abandoned campsite", "Ancient ruins"];
  const You_see = ["A tree with rotten fruit all around its base", "A large, hollow tree", "A pair of trees from the same root", "A tree growing over a boulder", "A clearing with bare ground", "A clearing with an old grave marker", "A boulder marked with several notches", "A thicket of dry brambles", "A slow, silent stream", "A stream flowing quietly through a ravine", "A stream with barren banks", "A dry creekbed", "A foul smelling pond", "A patch of mushrooms", "The decaying carcass of a large animal", "A large, hollow log", "A large, rotting log", "A tree felled by lightning", "An old gnarled tree", "The stump of an enormous tree"];
  const You_notice = ["A flock of crows scatter", "A vulture screams", "A raven croaks", "An owl hoots", "A crow caws", "A rat scurrying", "A ghostly presence flees", "A ghostly presence watches curiously", "A large bat takes to wing from a tree", "A wolf howls", "A large moth flutters about", "Rats squeaking", "An eerie silence", "The breeze stops", "The wind blows harder", "A twig snaps", "The wind moans eerily", "A distant scream", "The scent of rotting flesh", "The smell of decay"];
  const What$$$s_in_the_cave_or_cavern = ["Several skeletons", "Lots of bats", "Many spider webs", "A wight’s stash", "A ghoul’s lair", "A ghostly presence", "The hideout of a killer on the run", "Bare rock", "Unidentifiable remains", "An abandoned cookfire", "Some outlaws’ hideout", "A creepy hermit"];
  const You_come_upon = ["An animated skeleton", "A pair of skeletal warriors", "A giant spider", "A swarm of spiders", "A pack of wolves", "A savage werewolf", "A giant bat", "A swarm of bats", "A shadow panther", "A malevolent ghost", "A restless ghost", "A hungry ghoul", "An animated hatchet", "A pair of zombies", "A slobbering zombie", "A pair of graverobbers", "An anxious necromancer", "An old witch", "A lost child", "A gravedigger"];
  const Who_is_in_the_ancient_burial_mound = ["The remains of an ancient war chief", "The remains of a tribal shaman", "The remains of an ancient war chief", "A barrow-wight", "An ancient demilich", "The remains of ancient monks", "Twisted humanoid bones", "Malevolent ghosts", "Zombie warriors", "A skeletal hound", "An ancient vampire", "Huge, disorganized piles of bones"];
  const Who_is_in_the_grave = ["The corpse of a young maiden", "The corpse of a child", "The corpse of an old man", "The corpse of an old woman", "A fallen adventurer, hastily buried", "A dismembered corpse", "Twisted humanoid bones", "A pile of bones", "A newly-made vampire", "An empty coffin"];
  const Who_built_the_ancient_ruins = ["Dwarvish miners", "A wood elf king", "An ancient elf", "A demonic cult", "A death cult", "Shadow monks", "A long-dead emperor", "A forgotten king", "An evil queen", "A dark sorcerer"];
  const Who_resides_in_the_ancient_ruins_now = ["A brilliant necromancer", "Starved ghouls", "Undead guardians", "Giant spiders", "So many zombies", "Restless ghosts", "A vengeful wight", "A mad wraith", "A cursed mummy", "An aberrant presence", "A pair of manticores", "A dracolich"];
  const What$$$s_in_the_hole_or_burrow = ["A snake", "A spider", "Slimy mold", "Maggots", "A severed limb", "Unusual fungus", "A decomposing body", "Cold, dry bones"];
  const Who_lives_in_the_peculiar_cottage = ["A lonely old woman", "A reclusive shapeshifter", "An eccentric healer", "A beautiful witch", "A horrible witch", "A cranky old priest"];
  const Who_lived_in_the_abandoned_cabin = ["A lonely old woman", "A reclusive scholar", "An eccentric healer", "A poor woodcutter", "A fur trader", "A dwarf prospector"];
  const Who_resides_in_the_abandoned_cabin_now = ["A death hound", "A handful of zombies", "A paranoid shapeshifter", "A mad witch", "A malevolent ghost", "Restless ghosts"];
  const arrayOfArraysEnum ={You_find,You_see,You_notice,What$$$s_in_the_cave_or_cavern,You_come_upon,Who_is_in_the_ancient_burial_mound,Who_is_in_the_grave,Who_built_the_ancient_ruins,Who_resides_in_the_ancient_ruins_now,What$$$s_in_the_hole_or_burrow,Who_lives_in_the_peculiar_cottage,Who_lived_in_the_abandoned_cabin,Who_resides_in_the_abandoned_cabin_now};
  const arrayOfArrays = [You_find,You_see,You_notice,What$$$s_in_the_cave_or_cavern,You_come_upon,Who_is_in_the_ancient_burial_mound,Who_is_in_the_grave,Who_built_the_ancient_ruins,Who_resides_in_the_ancient_ruins_now,What$$$s_in_the_hole_or_burrow,Who_lives_in_the_peculiar_cottage,Who_lived_in_the_abandoned_cabin,Who_resides_in_the_abandoned_cabin_now];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Healer = function(){
  const The_healer_is = ["A devoted acolyte", "A skilled alchemist", "A religious fanatic", "A talkative herbalist", "A devout knight", "A soft-spoken monk", "An academy-trained physician", "A self-taught shaman", "A medical scholar", "A practiced surgeon", "A battle-tested warpriest", "A quirky witch-doctor"];
  const The_healer_has = ["A likable grin", "Kind eyes", "Alert eyes", "A sympathetic smile", "An arrogant smirk", "A thoughtful frown", "A humorless visage", "An easy laugh", "A habit of sighing", "A habit of muttering to himself or herself"];
  const The_healer_carries = ["A clean, sharp knife", "A wooden staff", "A sturdy cudgel", "A needle, thread, and some healing balms", "A pocketbook of sacred texts and prayers", "A notebook of hand-written potion recipes", "A variety of healing potions and bandages", "Scales, glass vials, and delicate tools", "A small field guide to diagnosing illnesses", "A wineskin"];
  const The_healer_is_looking_for = ["The translation of an ancient text", "Individuals in need of his or her services", "Someone to purchase a potion or two", "A dangerous substance for a potent elixir", "A location where a rare herb grows", "Proof of a god’s existence", "The recipe for a legendary potion", "A chance to earn a little coin", "A chance to tell a tale of woe", "The bottom of a goblet"];
  const arrayOfArraysEnum ={The_healer_is,The_healer_has,The_healer_carries,The_healer_is_looking_for};
  const arrayOfArrays = [The_healer_is,The_healer_has,The_healer_carries,The_healer_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Herblore = function(){
  const The_herbal_remedy_will_help = ["A wound heal more quickly", "To reduce pain", "To prevent infection in a wound", "To lower a fever", "To clear out congestion", "To reduce itchiness", "To recover one’s strength", "To prevent nausea", "To cure indigestion", "One stay awake", "One fall asleep", "To make one fertile or virile"];
  const The_herbal_remedy_is = ["A thick paste", "A thin paste", "A specially treated leaf", "A fluffy powder", "A crystalline substance", "A lotion or balm", "An unpalatable potion", "A sweet-tasting potion", "A strong tea", "A fragrant tea"];
  const Its_colour_is = ["Pale green", "Dark green", "Blue green", "Olive green", "Yellowish", "Reddish", "Pale grey", "Dark grey", "Light brown", "Dark brown"];
  const The_remedy_contains = ["Pollen", "Root hairs", "Fruit peels", "Ground roots", "Berries", "Shredded roots", "Moss", "Ground tree bark", "Mushrooms", "Wood shavings", "Fuzzy mold", "Fresh leaves", "Spores", "Dried leaves", "Ground thorns", "Crumbled leaves", "Seeds", "Leaf buds", "A shrubbery", "Flower petals"];
  const The_remedy_is_prepared_by = ["Vigorous mixing", "Boiling slowly", "Boiling rapidly", "Roasting", "Smoking", "Sun-drying", "Soaking", "Brining", "Brewing", "Steeping"];
  const The_herbal_remedy_must_be = ["Consumed immediately after preparation", "Consumed after it ages for a few hours", "Consumed after it ages for a few years", "Applied topically to the target area", "Taken with food", "Taken with water", "Taken before going to bed", "Taken with caution; side effects are likely"];
  const arrayOfArraysEnum ={The_herbal_remedy_will_help,The_herbal_remedy_is,Its_colour_is,The_remedy_contains,The_remedy_is_prepared_by,The_herbal_remedy_must_be};
  const arrayOfArrays = [The_herbal_remedy_will_help,The_herbal_remedy_is,Its_colour_is,The_remedy_contains,The_remedy_is_prepared_by,The_herbal_remedy_must_be];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_HighElf = function(){
  const The_high_elf_has = ["Black hair", "Copper hair", "Golden blonde hair", "Platinum blonde hair", "Silver-white hair", "Dark brown hair", "Reddish-brown", "Fiery red hair"];
  const and = ["Pale golden eyes", "Bright golden eyes", "Dark green eyes", "Brilliant green eyes", "Bright blue eyes", "Dark blue eyes", "Blue eyes with golden flecks", "Green eyes with golden flecks"];
  const as_well_as = ["A beautiful smile", "A delicate laugh", "A habit of nodding slowly while listening", "A humorless visage", "A habit of sighing", "A touch of sorrow in his or her voice", "A habit of pacing", "A habit of scratching the chin"];
  const The_high_elf_is = ["A powerful enchanter or enchantress", "A patient and wise sage", "A dedicated knight", "A capable scout", "A mystic oracle", "A watchful ranger", "A superb archer", "A masterful bladedancer", "A battle-tested warrior", "A well-known singer", "A masterful sailor", "A celebrated shipbuilder"];
  const The_high_elf_is_looking_to = ["Track an unnatural beast or invader", "Lead any travelers out of the forest", "Find some knowledge about an ancient event or place", "Locate a legendary gem", "Solve an ancient mystery", "Find one of the last copies of a legendary book", "Sail to the undying lands", "Share a drink a tale of woe"];
  const The_high_elf_carries = ["An ancient blade", "A unique gem or piece of jewelry", "A finely-crafted longsword or bow", "A tome of mystic lore", "The journal of an ancient scholar", "A sword etched with ancient runes", "A staff with a moon-white crystal set at the end", "Arrows fletched with the feathers of a fey bird INLINE", "Several vials of healing potions", "A cache of useful herbs", "A silver flute", "A golden harp"];
  const Arrows_fletched_with_the_feathers_of_a_fey_bird = ["eagle", "hawk", "owl", "phoenix", "raven", "swan"]; 
  const arrayOfArraysEnum ={The_high_elf_has,and,as_well_as,The_high_elf_is,The_high_elf_is_looking_to,The_high_elf_carries};
  const arrayOfArrays = [The_high_elf_has,and,as_well_as,The_high_elf_is,The_high_elf_is_looking_to,The_high_elf_carries];
  const arrayOfInlinesEnum ={Arrows_fletched_with_the_feathers_of_a_fey_bird};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_HighElf2 = function(){
  const The_high_elf_is = ["A powerful enchanter/enchantress", "A patient and wise sage", "A dedicated knight", "A dedicated knight", "A capable scout", "A capable scout"];
  const The_high_elf_is_looking_to = ["Track an unnatural beast or invader", "Lead any travelers out of the forest", "Lead any travelers out of the forest", "Find some knowledge about an ancient event or place", "Find some knowledge about an ancient event or place", "Share a drink a tale of woe"];
  const The_high_elf_carries = ["An ancient blade", "An ancient blade", "A unique gem or piece of jewelry", "A finely-crafted longsword or bow", "A finely-crafted longsword or bow", "A tome of mystic lore"];
  const arrayOfArraysEnum ={The_high_elf_is,The_high_elf_is_looking_to,The_high_elf_carries};
  const arrayOfArrays = [The_high_elf_is,The_high_elf_is_looking_to,The_high_elf_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Hunter = function(){
  const Usually_the_hunter_hunts = ["Near a quiet creek", "Along the banks of a wide river", "On the shore of a small pond", "On the shore of a large lake", "On a hillock or mesa", "In a canyon or gorge", "Where the vegetation is thick", "Where the vegetation is sparse"];
  const The_hunter_makes_kills_with = ["A reliable crossbow", "A powerful crossbow", "A huge bow of elder wood", "A supple bow", "A bow of young wood", "A spear and a hunting knife", "A thrown spear", "Baited steel traps", "Snares", "An unusual hunting weapon INLINE"];
  const An_unusual_hunting_weapon = ["bare hands", "battleaxe", "blowgun with darts", "blowgun with poisoned darts", "bolas and knife", "bolas and spear", "spiked club", "scimitar", "sling", "thrown darts"]; 
  const The_hunter_learned_to_hunt_from = ["A distant relation", "A parent", "A veteran ranger", "A grandparent", "Living with beasts", "A fellow hunter", "Living with beasts", "A military scout", "Surviving the wild", "A wild savage"];
  const The_hunter_prefers_to_hunt = ["Alone, stalking for prey", "Alone, lying in wait for prey", "With a pack of trained hunting hounds", "With a trusted hunting hound", "With a trusted partner", "With a local guide or experienced hunter"];
  const The_hunter_is_seeking = ["An apprentice or local guide", "A legendary beast", "To swap tales of hunts past", "Rumors of untouched hunting grounds", "Revenge against a rival", "A new hunting hound", "Hunting companions", "Drinking companions"];
  const The_hunter_has = ["A mouthful of chew", "A gap-toothed grin", "A wooden tooth", "A terrible scar on the neck", "A missing eye", "Wild eyes", "A trimmed black beard", "A long, hooked nose", "An open shirt and a very hairy chest", "Large ears"];
  const The_hunter_carries = ["A trophy from his or her first kill", "A trophy from a particularly difficult kill", "A polished, brass hunting horn", "A heavy, carved hunting horn", "A skinning knife and a pipe", "Salt, spices, and a frying pan"];
  const arrayOfArraysEnum ={Usually_the_hunter_hunts,The_hunter_makes_kills_with,The_hunter_learned_to_hunt_from,The_hunter_prefers_to_hunt,The_hunter_is_seeking,The_hunter_has,The_hunter_carries};
  const arrayOfArrays = [Usually_the_hunter_hunts,The_hunter_makes_kills_with,The_hunter_learned_to_hunt_from,The_hunter_prefers_to_hunt,The_hunter_is_seeking,The_hunter_has,The_hunter_carries];
  const arrayOfInlinesEnum ={An_unusual_hunting_weapon};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_IncorporealUndead = function(){
  const The_spirit_is = ["Incorporeal, invisible, and incapable of affecting its material surroundings", "Incorporeal, invisible, and capable of moving small objects", "Incorporeal, invisible, but capable of making itself seen", "Incorporeal, invisible, and hidden within an inanimate object INLINE", "Incorporeal, visible, but incapable of affecting it's material surroundings", "Incorporeal, visible, and capable of significant mischief and harm", "Incorporeal, extraordinarily beautiful, and capable of mischief and harm", "Incorporeal, wretched and slimy, and capable of mischief and harm", "Incorporeal, glowing blue or green, and capable of mischief and harm", "Incorporeal, visible, but in an unrecognizable form INLINE"];
  const Incorporeal_invisible_and_hidden_within_an_inanimate_object = ["book", "chest", "writing desk", "kettle", "sword", "wardrobe"]; 
  const Incorporeal_visible_but_in_an_unrecognizable_form = ["mist or fog", "animal shape", "floating skull", "faint glow", "pool of shadows", "spectral hand"]; 
  const The_spirit_moves = ["By creeping, oozelike, across the ground", "Smoothly, gliding above the grond", "Taking slow, fluid steps", "Lightly, rarely touching the ground", "Much quicker than you expect it to", "By teleporting in a swirl of shadows"];
  const The_spirit_appears_to_be = ["Severely bloated", "Moaning in anguish", "Snarling at you", "Breathing heavily", "Cowering in fear", "Poised to strike", "Gently bobbing up and down", "Wind-blown and haggard", "Fidgeting nervously", "Oozing ectoplasm"];
  const arrayOfArraysEnum ={The_spirit_is,The_spirit_moves,The_spirit_appears_to_be};
  const arrayOfArrays = [The_spirit_is,The_spirit_moves,The_spirit_appears_to_be];
  const arrayOfInlinesEnum ={Incorporeal_invisible_and_hidden_within_an_inanimate_object,Incorporeal_visible_but_in_an_unrecognizable_form};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_InfernalB = function(){
  const The_beast_appears_in_the_form_of = ["A panther", "A bat", "A raven", "A drake", "A scorpion", "A hippogriff", "A serpent", "A hound", "A worm", "A horse", "A wyvern", "A falcon"];
  const The_beast_has = ["Glowing red eyes", "Pale, sinister eyes", "Reddish skin around the face", "Several short horns or tusks", "Curled horns or tusks", "Long pointy horns", "An odor of brimstone", "An aura of choking smoke"];
  const and = ["Powerful hind legs for leaping and pouncing", "Speaks in a hissing voice", "Speaks in a growling voice", "Has a forked tongue", "Poisonous fangs", "Red or black, leathery wings", "Black or grey, feathered wings", "Has a tail with a venomous stinger"];
  const The_beast_is_looking_for = ["A mortal to tempt and to corrupt", "A soul to collect for its master", "A soul to torment", "An opportunity to overthrow its master", "A specific mortal who sold his or her soul", "An item of great power and evil"];
  const arrayOfArraysEnum ={The_beast_appears_in_the_form_of,The_beast_has,and,The_beast_is_looking_for};
  const arrayOfArrays = [The_beast_appears_in_the_form_of,The_beast_has,and,The_beast_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Jailer = function(){
  const The_jailer_is = ["A coward who likes to act tough", "A bully in every sense of the word", "A bastard son of a noble house", "A man who grew up among criminals", "A priest with a puritanical agenda", "A horrible sadist", "A mild-mannered man of faith", "A wicked little man"];
  const The_jailer_is_concerned_about = ["Rumors of an upcoming escape attempt", "Rumors of an upcoming escape attempt", "Losing his job after a messy prisoner death", "Facing a prisoner who creeps him out", "Facing a prisoner who creeps him out", "Ways to make a little extra silver"];
  const The_jailer_is_looking_to = ["Abuse someone who is defenseless", "Make himself feel powerful", "Make himself feel powerful", "Reach out to a disturbed prisoner", "Swap grisly tales", "Swap grisly tales"];
  const The_jailer_carries = ["A large ring of keys", "A large knife and a sap", "A pale of cold porridge from the kitchens", "A trophy taken from a tortured prisoner", "A pocket-sized prayer book", "A spiked club", "A scourge or whip", "A wineskin"];
  const arrayOfArraysEnum ={The_jailer_is,The_jailer_is_concerned_about,The_jailer_is_looking_to,The_jailer_carries};
  const arrayOfArrays = [The_jailer_is,The_jailer_is_concerned_about,The_jailer_is_looking_to,The_jailer_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Jungle = function(){
  const You_find = ["A cavern behind a waterfall", "The wreck of a riverboat", "A cave behind a curtain of tangled vines", "A hole beneath a large tree", "A large, damp burrow", "A primitive village", "A stilt house or tree house", "A recently vacated campsite", "A hastily abandoned campsite", "A ruined stilt house or tree house overgrown with vines", "A ruined ancient temple", "Ruins of an ancient city"];
  const You_see = ["A tree bearing large, yellow fruit", "A tree bearing small, red fruit", "A large, hollow tree", "A pair of trees from the same root", "A tree growing over a boulder", "A thicket of brambles", "A wide, shallow pool at a river bend", "A wide, shallow river with a single large tree growing in its main channel", "A fern-covered boulder in the midst of a gently flowing river", "Several gentle rapids", "A pair of dangerous rapids", "A large, gnarled log half-buried in mud", "A tree felled by lightning", "A colony of colorful mushrooms", "An enormous mushroom", "A large rock with a mossy overhang", "A large, hollow log", "A large, rotting log", "An old tree with an oddly shaped knot", "The stump of an enormous tree"];
  const You_notice = ["A flock of birds scatter", "A woodpecker drumming", "A bird singing sweetly", "A brightly colored bird flies away", "Birds chirping", "A monkey drops a fruit or nut from above", "A monkey leaps from one tree to another", "Large dragonflies buzzing about", "Cicadas chirping loudly", "Butterflies fluttering about", "A centipede scuttles beneath a rock", "An eerie silence", "Rain falls lightly", "The heat and humidity increase", "The sound of leaves rustling above", "A vine gently swaying", "A small snake slithers off", "Brightly, colored berries", "The scent of flowers", "The smell of decay"];
  const What$$$s_in_the_cave_or_cavern = ["A manticore’s lair", "Lots of bats", "Many spider webs", "A medusa’s stash", "An rage drake’s lair", "A band of kobolds", "Some abandoned mining equipment", "Bare rock", "A potable spring", "Unidentifiable remains", "Some treasure hunters’ hideout", "A strange hermit"];
  const You_come_upon = ["Torrential rains", "A place where you sink into the mud", "A predatory plant with grasping vines", "A large jungle cat", "A small hunting cat", "A giant spider", "Several giant spiders", "A troop of protective apes", "A lone great ape", "A rare flightless bird", "A malevolent ghost", "A pair of lizardfolk hunters", "A lizardfolk shaman", "A yuan-ti patrol", "An ogre", "A pair of primitive scouts", "A skilled primitive hunter", "An old witch", "A curious herbalist", "A ruthless big-game hunter"];
  const The_flowers_are = ["Blood red", "Shockingly pink", "Pale purple", "Deep crimson", "Dark purple", "Iridescent orange", "Pale pink", "Brilliant yellow", "White", "Dark bluish purple"];
  const The_petals_are = ["Radiating in a spiraling pattern", "Radiating from a hemispherical center", "Radiating from a conical center", "Radiating in a narrow stalk in the center", "Paired and curling back from the center", "Triangular and flat", "Triangular and curled", "Ellipsoidal and flat", "Ellipsoidal and curled", "The largest petals you’ve ever seen"];
  const Who_built_the_ancient_ruins = ["A lizardfolk chieftain", "An aberrant cult", "A snake cult", "A dragon cult", "A death cult", "Shadow monks", "A long-dead emperor", "A forgotten king", "An evil queen", "A dark sorcerer"];
  const Who_resides_in_the_ruins_now = ["An isolated snake cult", "A paranoid shapeshifter", "Poisonous snakes", "Giant spiders", "Hungry zombies", "Wraiths and shadows", "A handful of ogres", "A band of lizardfolk warriors", "A pair of manticores", "A dragon"];
  const What_kind_of_riverboat_was_it = ["A fisherman's raft", "A fisherman's raft", "An eeler’s canoe", "A beasthunter's dugout", "A treasure seeker's keelboat", "A treasure seeker's keelboat"];
  const Who_lives_or_lived_in_the_stilt_house_or_tree_house = ["A lonely old woman", "A reclusive shapeshifter", "An eccentric healer", "A beautiful witch", "A horrible witch", "An outcast wood elf", "A horrifying medusa", "A scheming hag"];
  const Who_camped_here = ["A lizardfolk hunting party", "A band of wandering elves", "A primitive hunting party", "A primitive war band", "A band of yuan-ti raiders", "An extraordinary beasthunter", "A brave explorer and naturalist", "An ambitious treasure hunter"];
  const What$$$s_in_the_hole_or_burrow = ["A poisonous snake", "A spider", "A poisonous frog", "A swarm of earthworms", "A giant centipede", "Unusual fungus"];
  const What$$$s_up_in_the_tree = ["A constrictor snake", "A giant spider", "A swarm of bats", "A swarm of locusts", "An aggressive ape", "A lizardfolk hunter"];
  const arrayOfArraysEnum ={You_find,You_see,You_notice,What$$$s_in_the_cave_or_cavern,You_come_upon,The_flowers_are,The_petals_are,Who_built_the_ancient_ruins,Who_resides_in_the_ruins_now,What_kind_of_riverboat_was_it,Who_lives_or_lived_in_the_stilt_house_or_tree_house,Who_camped_here,What$$$s_in_the_hole_or_burrow,What$$$s_up_in_the_tree};
  const arrayOfArrays = [You_find,You_see,You_notice,What$$$s_in_the_cave_or_cavern,You_come_upon,The_flowers_are,The_petals_are,Who_built_the_ancient_ruins,Who_resides_in_the_ruins_now,What_kind_of_riverboat_was_it,Who_lives_or_lived_in_the_stilt_house_or_tree_house,Who_camped_here,What$$$s_in_the_hole_or_burrow,What$$$s_up_in_the_tree];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Knight = function(){
  const The_knight$$$s_house$$$s_colors_are = ["Black", "Red / scarlet", "Gold", "Forest green", "Royal blue", "Violet", "Silver / light grey", "Bronze", "Tan / khaki", "Brown / beaver", "Dark grey / gunmetal", "White", "Maroon", "Sky blue", "Navy blue", "Dark brown / chocolate", "Teal / turquoise", "Yellow", "Orange", "Olive green"];
  const The_knight$$$s_house$$$s_symbol_is = ["A weapon INLINE", "A piece of armor INLINE", "A celestial body INLINE", "A plant or part of a plant INLINE", "An aquatic beast INLINE", "A small beast INLINE", "A great beast INLINE", "A bird INLINE"];
  const A_weapon = ["arrow", "mace", "axe", "spear", "dagger", "staff", "hammer", "sword"]; 
  const A_piece_of_armor = ["breastplate", "helm", "gauntlet", "shield"]; 
  const A_celestial_body = ["sun", "star", "moon", "comet"]; 
  const A_plant_or_part_of_a_plant = ["apple", "maple", "barley", "oak", "briar", "olive", "fig", "pine", "grapes", "rose", "lily", "wheat"]; 
  const An_aquatic_beast = ["crab", "fish", "crocodile", "octopus", "frog", "whale"]; 
  const A_small_beast = ["badger", "hedgehog", "bat", "lizard", "beaver", "rat", "dog", "scorpion", "ferret", "snake", "fox", "spider"]; 
  const A_great_beast = ["bear", "lion", "boar", "ox", "bull", "stag", "dragon", "wolf"]; 
  const A_bird = ["cardinal", "pelican", "dove", "raven", "eagle", "rooster", "hawk", "sparrow", "mockingbird", "swan", "owl", "vulture"]; 
  const The_knight_is = ["A pompous windbag", "A charming hero", "A daring swashbuckler", "A violent drunk", "A brilliant strategist", "A religious zealot", "A beautiful youth", "A brutish thug", "A celebrated war hero", "A popular tavern patron", "A favorite among the ladies", "Ruggedly handsome"];
  const The_knight_has_sworn_to_a_noble_lord_or_lady_to = ["Protect that person from harm", "Defend that person’s lands", "Avenge that person’s grievances", "Protect that person’s loved ones", "Advance that person’s ideals or faith", "Ride to war in that person’s name"];
  const Above_all_else_the_knight_values = ["Bravery", "Honor", "Righteousness", "Might (strength or tyranny)", "Love (devotion or conquest)", "Carousing"];
  const The_knight_is_clad_in = ["Studded leather armor", "Chainmail", "Chainmail", "Scale armor", "Scale armor", "Plate armor"];
  const The_knight$$$s_armor_is = ["Shiny and new", "In excellent condition", "Obviously repaired, but serviceable", "Covered in dings and dents", "Dirty and well-worn", "Barely held together"];
  const The_knight_is_wielding = ["A longsword", "A longsword and a shield", "Two shortswords", "A shortsword and a shield", "A bastard sword", "A greatsword", "A flail and a shield", "A morningstar", "A battleaxe and a shield", "A warhammer and a shield", "A lance and a longsword", "A lance and a battleaxe"];
  const The_knight$$$s_mount_is = ["A huge destrier", "A reliable courser", "A snorting charger", "A swift garron", "A wickering palfrey", "A nervous pony"];
  const On_the_knight$$$s_face_is = ["A missing ear", "A jagged scar", "A hard-set jaw", "A friendly grin", "A faraway look", "A sad look", "A pair of piercing eyes", "A broken nose", "Bushy eyebrows", "Unshaven stubble", "A neatly-trimmed beard", "An extravagant mustache"];
  const The_knight_carries = ["A blade with soft leather tassels dangling from the pommel", "A blade with a carved hilt INLINE", "A blade with beasts sculpted into the steel of the guard INLINE", "A blade made of blackened steel", "A highly polished blade", "A token from a sweetheart", "A token from a parent", "A letter from a fallen comrade", "A trophy from a fallen enemy", "A ribbon from a faraway maiden"];
  const A_blade_with_a_carved_hilt = ["ivory", "jade", "soapstone", "ebony", "mahogany", "oak"]; 
  const A_blade_with_beasts_sculpted_into_the_steel_of_the_guard = ["dragons", "lions", "scorpions", "snakes", "spiders", "wolves"]; 
  const arrayOfArraysEnum ={The_knight$$$s_house$$$s_colors_are,The_knight$$$s_house$$$s_symbol_is,The_knight_is,The_knight_has_sworn_to_a_noble_lord_or_lady_to,Above_all_else_the_knight_values,The_knight_is_clad_in,The_knight$$$s_armor_is,The_knight_is_wielding,The_knight$$$s_mount_is,On_the_knight$$$s_face_is,The_knight_carries};
  const arrayOfArrays = [The_knight$$$s_house$$$s_colors_are,The_knight$$$s_house$$$s_symbol_is,The_knight_is,The_knight_has_sworn_to_a_noble_lord_or_lady_to,Above_all_else_the_knight_values,The_knight_is_clad_in,The_knight$$$s_armor_is,The_knight_is_wielding,The_knight$$$s_mount_is,On_the_knight$$$s_face_is,The_knight_carries];
  const arrayOfInlinesEnum ={A_weapon,A_piece_of_armor,A_celestial_body,A_plant_or_part_of_a_plant,An_aquatic_beast,A_small_beast,A_great_beast,A_bird,A_blade_with_a_carved_hilt,A_blade_with_beasts_sculpted_into_the_steel_of_the_guard};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_LegendaryB = function(){
  const The_beast_is = ["An owlbear", "A basilisk", "A serpent", "A bear", "A shark", "A chimera", "A spider", "A drake", "A stag", "An eagle", "A tiger", "A griffon", "A unicorn", "A hound", "A whale", "A kraken", "A wolf", "A lion", "A wyvern", "A manticore"];
  const The_beast_has = ["Unnatural intelligence", "The power of speech", "An especially savage manner", "A frightening howl or cry", "A mournful howl or cry", "An immense size", "Unusual coloration or markings", "A terrible scar on its face", "A terrible scar on its body", "A missing eye"];
  const The_beast_is_known_for = ["Slaying a well-known hero", "Slaying a notorious villain", "Laying ruin to a city or town", "Sinking a ship or scattering a caravan", "Leaving a trail of destruction in its wake", "Lairing in a dangerous place", "Lairing in a holy place", "Hunting along a well-traveled road", "Toying with its prey before the kill", "Protecting the people who live near it"];
  const arrayOfArraysEnum ={The_beast_is,The_beast_has,The_beast_is_known_for};
  const arrayOfArrays = [The_beast_is,The_beast_has,The_beast_is_known_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_LizardfolkJungle = function(){
  const The_lizardfolk_is = ["A savvy hunter", "A savvy hunter", "A savage warrior", "A savage warrior", "A powerful shaman", "A dim-witted brute"];
  const The_lizardfolk_is_looking_for = ["New waters for fishing and hunting", "New waters for fishing and hunting", "The tracks of an intruder in the region", "The tracks of an intruder in the region", "The lair of a troublesome beast", "Safe nesting grounds"];
  const The_lizardfolk_carries = ["A scimitar and a wooden shield", "A scimitar and a wooden shield", "A spear and a blowgun", "A spear and a blowgun", "A curved dagger with feathers on the hilt", "An oversized club"];
  const arrayOfArraysEnum ={The_lizardfolk_is,The_lizardfolk_is_looking_for,The_lizardfolk_carries};
  const arrayOfArrays = [The_lizardfolk_is,The_lizardfolk_is_looking_for,The_lizardfolk_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Lycanthrope = function(){
  const In_humanoid_form_the_beastshifter_presents_himself_or_herself_as = ["A farmer or herder", "A miner or fisher", "A beggar or urchin", "A noble or knight", "A barkeep or barmaid", "A barbarian or gladiator", "An herbalist or healer", "A soldier or sellsword", "A hunter or assassin", "A thief or bandit", "A smuggler or con artist", "A sailor or pirate"];
  const The_beastshifter_transforms_into = ["A grizzly bear", "A black bear", "A wild boar", "An oversized black rat", "A large brown rat", "A lanky grey rat", "A fierce tiger", "A grey wolf", "A mottled brown and grey wolf", "A reddish brown wolf", "A dark brown or black wolf", "A white wolf"];
  const The_beastshifter_transforms_involuntarily = ["Whenever he/she is in moonlight", "On nights when a full moon occurs", "On nights when the moon is half full or more", "Whenever the leader of his/her pack or clan transforms", "Whenever he/she becomes enraged", "Never; he/she is in complete control of his/her power"];
  const While_transformed_the_beastshifter_behaves = ["Mostly as a normal beast of his/her type", "As an unusually intelligent version of the beast of his/her type", "More like a human than a beast", "As a skilled hunter", "As a cautious predator", "As a savage predator", "As a frightened beast", "Violently, spreading blood and chaos"];
  const The_beastshifter_has_a_tendency_to = ["Lose his/her temper easily", "Speak in low growls (or squeaks), making it difficult for others to understand him/her when excited", "Recoil from touching anything made of silver", "Get nervous in moonlight", "Constantly lick his/her lips hungrily", "Fidget or pace when in indoor spaces", "Daydream about hunting in his/her beast form", "Sniff people upon meeting them"];
  const The_beastshifter_lives = ["Alone among humans, hiding his/her powers", "Alone among humans who know and accept his/her powers", "Alone as an outcast from human society", "Among other beastshifters integrated into human society", "Among other beastshifters as outcasts from human society", "Among other beastshifters, hiding their powers from society", "Among other beastshifters, apart from human society", "Alone as an outcast from his/her pack or clan"];
  const The_beastshifter_makes_his_or_her_home = ["In a cave", "In a swamp", "On a vast plain", "In a forest", "In a cottage in the woods", "Hidden in the mountains", "In a quiet village", "Just outside a quiet village", "Down a dark alley in the city", "In the city sewers", "On a quiet residential street in the city", "In or near a castle or palace"];
  const In_humanoid_form_the_beastshifter$$$s_face_has = ["Unsightly nose and ear hair", "A garish earing", "An empty eye socket", "A grisly scar", "A grim look", "Sad puppy-dog eyes", "A nervous grin", "An toothy grin", "A frame of long, beautiful long hair", "Ferocious sideburns", "An unruly beard", "An intimidating mustache"];
  const In_humanoid_form_the_beastshifter_fights_with = ["Hit-and-run tactics", "Making a mad charge", "Kicking and stomping", "Sharp claws", "Sharp teeth", "Lots of taunts and jeers", "Lots of screaming and shouting", "Lots of head-butting"];
  const arrayOfArraysEnum ={In_humanoid_form_the_beastshifter_presents_himself_or_herself_as,The_beastshifter_transforms_into,The_beastshifter_transforms_involuntarily,While_transformed_the_beastshifter_behaves,The_beastshifter_has_a_tendency_to,The_beastshifter_lives,The_beastshifter_makes_his_or_her_home,In_humanoid_form_the_beastshifter$$$s_face_has,In_humanoid_form_the_beastshifter_fights_with};
  const arrayOfArrays = [In_humanoid_form_the_beastshifter_presents_himself_or_herself_as,The_beastshifter_transforms_into,The_beastshifter_transforms_involuntarily,While_transformed_the_beastshifter_behaves,The_beastshifter_has_a_tendency_to,The_beastshifter_lives,The_beastshifter_makes_his_or_her_home,In_humanoid_form_the_beastshifter$$$s_face_has,In_humanoid_form_the_beastshifter_fights_with];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_MemberGoblinGang = function(){
  const The_goblin_is_particularly_skilled_at = ["Being sneaky", "Not being seen", "Tracking foes", "Building traps", "Avoiding traps", "Repairing traps", "Foraging for food and water", "Wrangling beasts", "Digging tunnels", "Crafting arms and armor", "Crushing skulls", "Cutting throats"];
  const The_goblin_wields = ["A rusty sword", "A spiked club", "A finely-made swor", "A wicked looking axe", "A spear decorated with feathers", "Several polished daggers", "A large, serrated dagger", "A pair of curved daggers", "A cracked wooden shield", "A shield, emblazoned with the gangs’ symbol", "Arrows fletched with crow feathers", "Arrows fletched with hawk feathers"];
  const The_goblin_wears = ["Armor with greasy stains", "Patched leather armor", "Piecemeal chain armor", "A leather helm", "A large skull as a helm", "A wolf-face helm", "A lanyard of severed ears", "A big hoop earring", "A shiny silver belt", "A wolf skin", "A black cloak with a hood", "A large belt purse"];
  const On_the_goblin$$$s_face_has = ["Blue warpaint", "An eyepatch", "Burn scars", "Only one ear", "No front teeth", "An unusal tattoo on its forehead", "Stitches closing a wound on the jaw", "A topknot above it", "Several muddy smudges", "A boil oozing pus", "A wisp of a mustache", "Amazing sideburns"];
  const The_goblin_has = ["An unsettling stare", "A lean and hungry look", "A maniacal laugh", "A mad cackling laugh", "A high-pitched twittering laugh", "A tendency to snicker at everything", "A nervous twitch", "A difficult time standing still"];
  const arrayOfArraysEnum ={The_goblin_is_particularly_skilled_at,The_goblin_wields,The_goblin_wears,On_the_goblin$$$s_face_has,The_goblin_has};
  const arrayOfArrays = [The_goblin_is_particularly_skilled_at,The_goblin_wields,The_goblin_wears,On_the_goblin$$$s_face_has,The_goblin_has];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_MercenaryIndividual = function(){
  const The_sellsword_is_armored_in = ["Exotic robes", "Leather armor", "Studded leather armor", "Ringmail", "Hide armo", "Chainmail", "Scale armor", "Plate armor"];
  const The_sellsword$$$s_armor_is = ["Shiny and new", "In excellent condition", "Obviously repaired, but serviceable", "Covered in dings and dents", "Dirty and well-worn", "Barely held together"];
  const The_sellsword_is_wielding = ["A longsword", "A longsword and a shield", "Two shortswords", "A shortsword and a shield", "A bastard sword", "A greatsword", "A heavy flail", "A morningstar", "A huge axe", "A warhammer", "A scimitar", "A scimitar and a shield"];
  const The_sellsword_fights_with = ["Hit-and-run tactics", "Making a direct assault", "Fancy footwork", "Unpredictable lurches", "Masterful combat maneuvers", "No mercy", "Lots of taunts and jeers", "Dirty tactics"];
  const The_sellsword_fights_for = ["The love of gold", "Pure bloodlust", "A chance to deal out sadistic torment", "A chance at vengeance", "Gold to repay debts", "Gold to aid a family member", "Gold to secure a marriage", "Fortune and glory"];
  const The_sellsword_is = ["A well-trained soldier", "A self-taught militia veteran", "A veteran of gladiatorial combat", "A veteran of warfare", "A prisoner of war", "A political prisoner", "The son of a poor man", "A drunk", "A fugitive criminal", "A former pirate", "A de-frocked priest", "A favorite among the ladies"];
  const On_the_sellsword$$$s_face_is = ["An eye-catching mole", "A garish earring", "An empty eye socket", "A grisly scar", "A haughty sneer", "A look of sadness", "A stupid grin", "An eager grin", "A frame of long, beautiful long hair", "Ferocious sideburns", "An unruly beard", "An intimidating mustache"];
  const The_sellsword_carries = ["A blade with a gem embedded in the pommel", "A blade with soft leather tassels dangling from the pommel", "A blade with a carved hilt INLINE", "A blade with a gently curved hilt", "A blade with beasts sculpted into the steel of the guard INLINE", "A blade made of blackened steel", "A highly polished blade", "A blade with runes carved into it", "Arrows/bolts tipped with black steel", "Arrows/bolts with bronzed tips", "Arrows/bolts fletched with crow feathers", "Arrows/bolts fletched with peacock feathers"];
  const A_blade_with_a_carved_hilt = ["ivory, ", "jade", "soapstone", "ebony", "mahogany", "oak"]; 
  const A_blade_with_beasts_sculpted_into_the_steel_of_the_guard = ["dragons", "lions", "scorpions", "snakes", "spiders", "wolves"]; 
  const arrayOfArraysEnum ={The_sellsword_is_armored_in,The_sellsword$$$s_armor_is,The_sellsword_is_wielding,The_sellsword_fights_with,The_sellsword_fights_for,The_sellsword_is,On_the_sellsword$$$s_face_is,The_sellsword_carries};
  const arrayOfArrays = [The_sellsword_is_armored_in,The_sellsword$$$s_armor_is,The_sellsword_is_wielding,The_sellsword_fights_with,The_sellsword_fights_for,The_sellsword_is,On_the_sellsword$$$s_face_is,The_sellsword_carries];
  const arrayOfInlinesEnum ={A_blade_with_a_carved_hilt,A_blade_with_beasts_sculpted_into_the_steel_of_the_guard};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_MercenaryTroop = function(){
  const The_mercenary_troop$$$s_colors_are = ["Black", "Red / scarlet", "Gold", "Forest green", "Royal blue", "Brown / beaver", "Dark grey / gunmetal", "Maroon", "Navy blue", "Dark brown / chocolate", "Steel / blue grey", "Olive green"];
  const The_mercenary_troop$$$s_banner_features = ["A skull", "A ghost", "A clenched fist", "A flame", "An arrow", "A dagger", "A sword", "A hammer", "The sun", "The moon", "A bat", "A bull", "A dragon", "A falcon", "A lion", "A raven", "A scorpion", "A snake", "A vulture", "A wolf"];
  const The_mercenaries$$$_commander_is = ["A brazen outlaw", "A charismatic demagogue", "A mysterious foreigner", "An outcast from a prominent family", "A ruthless killer", "A dashing swashbuckler", "A brutish thug", "A celebrated war hero", "A disgraced knight", "A former arena champion"];
  const The_mercenary_troop$$$s_attitude_toward_their_commander_is = ["Friendly and loyal", "Respectful and business-like", "Cautious and uncertain", "Terrified and tight-lipped", "Disappointed and rude", "Angry and rebellious"];
  const The_mercenary_troop_is_currently = ["Gainfully employed as guards", "Gainfully employed in war", "Under contract with some criminals", "Under contract with some merchants", "Under contract with some nobles", "Looking for work"];
  const The_mercenary_troop_specializes_in = ["Siege-breaking", "Holding redoubts", "Frontal assaults", "Infiltration tactics", "Skirmishes", "Laying ambushes", "Patrolling", "Flanking maneuvers", "Guerilla tactics", "Raiding and pillaging"];
  const The_mercenary_troop_is_notorious_for = ["Taking no prisoners", "Leaving the dead to be eaten by beasts", "Tattooing or branding prisoners", "Scalping or flaying prisoners", "Burning villages and fields", "Betraying their employers", "Singing bawdy songs", "Drinking too much ale and wine"];
  const arrayOfArraysEnum ={The_mercenary_troop$$$s_colors_are,The_mercenary_troop$$$s_banner_features,The_mercenaries$$$_commander_is,The_mercenary_troop$$$s_attitude_toward_their_commander_is,The_mercenary_troop_is_currently,The_mercenary_troop_specializes_in,The_mercenary_troop_is_notorious_for};
  const arrayOfArrays = [The_mercenary_troop$$$s_colors_are,The_mercenary_troop$$$s_banner_features,The_mercenaries$$$_commander_is,The_mercenary_troop$$$s_attitude_toward_their_commander_is,The_mercenary_troop_is_currently,The_mercenary_troop_specializes_in,The_mercenary_troop_is_notorious_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_MerchantGuild = function(){
  const The_guild_is_controlled_by = ["A no-nonsense kingpin who despises bureaucracy", "A small and pinched-face gnome with a sinister desire for money", "An inexperienced young noble with a petulant need for a full purse", "A council of heads of local crafting guilds", "An argumentative mass democracy of all the city's merchants", "A longstanding and ancient charter that applies to all merchants, and the militia acting as the charter's executors", "The most wealthy merchant in the city", "A city-appointed monk, who has sworn away worldly wealth"];
  const This_guild$$$s_illicit_affairs_comprise = ["None; they are paragons of morality", "Staying well within the law, if slipping on a few taxes due to ignorance, of course", "Knowing how to play the political game, they trade a few favors with officials", "Guild leaders having dollar signs for eyes, and setting advantageous prices in the city", "Price floors becoming commonplace and frequent small bribes to city officials to overlook minor illicit activities", "A variety of upper-level bribes, some minor scams, and the dismay of local priests", "Rampant corruption, with large-scale bribery of various city officials and contracts with a thieves’ guild and occasionally an assassin", "Pacts with crime lords, fiends, or vampires, large-scale counterfeiting, and treason are business-as-usual for this guild"];
  const This_guild_is = ["Poor; though once great, this guild has fallen on hard times and is struggling to maintain its power", "Brand new; the guild is frantically recruiting members in order to snatch power", "Exponentially rising; a recent boon has granted the guild great profits", "Slowing; a rising competitor is slowly cutting into profits", "Absolute; the guild has complete dominance in their field", "Spotty; the guild’s profits and influence rise and fall, as market conditions change.", "Unquestioned;, the guild exerts complete dominance over all other guilds in the area", "Questionable, though the guild claims to have control, some operators skirt its rules"];
  const Guild_business_occurs = ["In the guild leader's personal residence or in the home of an influential merchant", "In the dusty basement of the town hall", "In the backroom of a tavern or pub", "In a towering guildhall that leans slightly", "On a moored ship or in a large warehouse", "In the ruin of an old temple or palace", "In an open-air pavilion in the city's bazaar", "In a large guildhall just off the city’s bazaar", "In an opulent guildhall, showcasing riches", "In a house down a shady back-alley", "In a guildhall jointly shared with all other guilds of the city", "In a famous, centuries-old guildhall"];
  const The_guild_has_been_having_some_trouble_with = ["A merchant was recently shaken down by a lowly thug, send a message", "Transporting a semi-rare magical item to a nearby branch", "Gold stores, perhaps you could make a donation of 500 gold pieces", "A caravan that doesn't feel comfortable going through a newly discovered path in the nearby woods, escort them", "A city militia member getting nosy", "A crafting guild hesitant to sign up for the merchant guild's special loyalty program", "A rat infestation", "A rat infestation (that actually is a rift to the Plane of Rats or similar filthy location)"];
  const The_guild_needs_you_to_handle = ["A caravan gone missing in a wild region", "A thieves’ guild that is uncooperative", "A city official hellbent on stamping out capitalism", "A competing Merchant guild that has begun to outpace the guild", "A recent trade blockade—you need to resolve the tensions or clear the blockade", "Rumors of aberrations in the night that have driven away trade", "A Board Member who has decided to go rogue and has stolen from the coffers", "A very large rat infestation (the rift has become a permanent Gate to the Plane of Rats or similar filthy location)"];
  const A_matter_of_great_import_the_guild_is_faced_with = ["Mass corruption from the inside, half the board is revealed to be mind flayers", "A mercenary army laying siege to the city", "A massive religious revival that causes the entire population to scorn material pursuits and cut deep into the bottom line", "A mummy king who has taken hostage a caravan with most of the guild’s assets", "Political revolution that threatens the guild coffers with looting, protect our stores but civilians cannot be harmed", "An investigation from the King's Spymaster into the extent of the guild's illicit activities", "A planar being who has supplanted the guild master, who has been imprisoned", "Waves of rats that threaten the entire guildhall's basement (the rift has become a gigantic faucet of rats) where an Avatar of the God of Rats has taken up residence"];
  const The_shopkeeper_is = ["Bored", "Bored", "Eager to help", "Visibly perturbed", "Nervously looking about", "Nervously looking about"];
  const The_shopkeeper_seeks_someone_to = ["Purchase faulty goods", "Purchase a large shipment of goods", "Purchase an unusual or exotic item", "Acquire something from a rival’s shop", "Listen to some whining", "Share some wine and chat"];
  const arrayOfArraysEnum ={The_guild_is_controlled_by,This_guild$$$s_illicit_affairs_comprise,This_guild_is,Guild_business_occurs,The_guild_has_been_having_some_trouble_with,The_guild_needs_you_to_handle,A_matter_of_great_import_the_guild_is_faced_with,The_shopkeeper_is,The_shopkeeper_seeks_someone_to};
  const arrayOfArrays = [The_guild_is_controlled_by,This_guild$$$s_illicit_affairs_comprise,This_guild_is,Guild_business_occurs,The_guild_has_been_having_some_trouble_with,The_guild_needs_you_to_handle,A_matter_of_great_import_the_guild_is_faced_with,The_shopkeeper_is,The_shopkeeper_seeks_someone_to];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_MilitaryCamp = function(){
  const This_tent_is_functions_as = ["Barracks", "A chapel or shrine", "A forge INLINE", "An infirmary or surgeons’ office", "A mess hall", "Officers’ quarters", "Officers’ mess", "A supply tent INLINE", "A stable or kennel", "A workshop INLINE"];
  const A_forge = ["armorer", "farrier", "weaponsmith"]; 
  const A_supply_tent = ["armory", "building materials", "building materials", "food, ", "food", "water"]; 
  const A_workshop = ["cartwright", "siege engineer", "fletcher", "leatherworker", "cartwright", "fletcher"]; 
  const You_see = ["A corral or wagon yard", "A guard post or watch tower", "A gatehouse", "Tables that serve as an outdoor mess hall", "A drill yard", "A target range or sparring pit", "Water wells", "A privy or waste pit", "An outdoor forge or workshop", "A stockade or jail", "Animal pens", "Graves"];
  const The_camp$$$s_mounts_include = ["Camels", "Large draft horses", "Reliable garrons", "Quick-footed palfreys", "Huge destriers", "Exotic mounts INLINE"];
  const Exotic_mounts = ["bears", "bison", "elephants", "elk", "giant lizards", "zebras"]; 
  const The_camp_has = ["Falcons", "Fighting dogs", "Hounds", "Terriers", "Wolves", "Exotic beasts INLINE"];
  const Exotic_beasts = ["boars", "dire rats", "dire wolves", "drakes", "eagles", "lions", "owlbears", "ravens", "tigers", "wargs"]; 
  const The_camp$$$s_general_mood_is = ["Desperate; a calamity has befallen them", "Solemn; badly outnumbered, battle is nigh", "Foul; morale is bad, and provisions are low", "Tired; the journey is long and longer yet", "Eager; great plunder waits at journey’s end", "Cheerful; victory is all but certain"];
  const arrayOfArraysEnum ={This_tent_is_functions_as,You_see,The_camp$$$s_mounts_include,The_camp_has,The_camp$$$s_general_mood_is};
  const arrayOfArrays = [This_tent_is_functions_as,You_see,The_camp$$$s_mounts_include,The_camp_has,The_camp$$$s_general_mood_is];
  const arrayOfInlinesEnum ={A_forge,A_supply_tent,A_workshop,Exotic_mounts,Exotic_beasts};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Mine = function(){
  const The_miners_are_hauling_out = ["Salt", "Chalk", "Silver", "Coal", "Zinc", "Copper", "Diamonds", "Gold", "Emeralds", "Iron", "Jade", "Lea", "Rubies", "Lead", "Sapphires", "Nickel", "Turquoise", "Platinum", "Other gems INLINE", "An especially rare metal INLINE"];
  const Other_gems = ["amethyst", "aquamarine", "garnet", "opal", "peridot", "tanzanite", "topaz, ", "zirconium"]; 
  const An_especially_rare_metal = ["adamantine", "mithral", "orium"]; 
  const The_mine$$$s_entrance_is = ["Up a winding trail from a camp or village", "Up a steep trail from a camp or village", "A wide, natural cave mouth", "A wide open pit", "An easy to spot, narrow passage", "A steep, slippery sloped tunnel", "A tunnel reinforced with wood beams", "A partially collapsed tunnel, impassable without excavation", "Marked with several signs", "Hidden by the terrain INLINE", "Hidden by vegetation INLINE", "Difficult to access INLINE"];
  const Hidden_by_the_terrain = ["boulders", "boulders", "waterfall", "rocky overhang", "rocky overhang", "hillock"]; 
  const Hidden_by_vegetation = ["a briar patch", "a briar patch", "a curtain of moss", "enormous tree roots", "overgrown vines", "overgrown vines"]; 
  const Difficult_to_access = ["up or down a cliff face", "up or down a cliff face", "down a deep hole", "down a deep hole", "in an underwater tunnel", "through an illusory rock or wall"]; 
  const Most_of_the_mine_is = ["A sprawling maze of twisting tunnels", "A sprawling maze of narrow tunnels", "A series of tunnels connecting large natural caverns", "A wide open-pit quarry", "A series of tunnels connecting large open pits or sinkholes", "A sprawling maze of open trenches"];
  const Material_excavated_from_the_mine_is = ["Floated on rafts down a stream or river", "Hauled out on pack mules", "Hauled out on mule-drawn carts", "Hauled out on sure-footed ponies", "Hauled out on ox-drawn carts", "Hauled out on the backs of uncommon beasts of burden INLINE", "Rolled out in single mine carts", "Rolled out in long trains of mine carts"];
  const Hauled_out_on_the_backs_of_uncommon_beasts_of_burden = ["bears", "giant lizards", "goats", "giant lizards", "goats", "undead horses"]; 
  const You_find = ["A colony of poisonous mushrooms", "A patch of toxic mold", "A sudden cave in", "Several rocks tumble down a sloped wall", "The floor is very slippery", "You nearly step into a pit or chasm", "A heap of unstable explosives", "A sudden explosion in another part of the mine shakes the floor", "The floor is writhing with vermin INLINE", "The tunnel or trench is steadily flooding"];
  const The_floor_is_writhing_with_vermin = ["beetles", "beetles", "centipedes", "rats", "spiders", "spiders"]; 
  const If_you_dig_deep_you$$$ll_find = ["Myconids", "Carrion crawler", "Ooze", "Cloaker", "Otyugh", "Darkmantle", "Piercer", "Drider", "Roper", "Fungi", "Rust monster", "Gargoyle", "Skeletons", "Ghosts", "Stirges", "Gricks", "Umber hulk", "Hook horror", "Wraiths", "Mimics"];
  const The_creature_is = ["A predator or a hunter", "A food source for other denizens", "A recently-arrived squatter or invader", "A long-time resident", "A parasite or a scavenger", "A host or the dominant species", "Unusually abundant", "Living in deliberate isolation", "Living in unintentional isolation", "Severely out of place in this mine"];
  const The_miners_complain_of_trouble_from_a_nearby_colony_of = ["Grimlocks", "Cyclops", "Hobgoblins", "Duergar", "Kobolds", "Dwarves", "Orcs", "Elves, dark", "Troglodytes", "Gnomes, deep", "Trolls", "Goblins"];
  const You_see = ["An underground lake of potable water", "A trickle of water on the walls and floo", "A pool of stagnant water", "A rickety bridge over a chasm", "A narrow chasm with walls close enough to climb between", "A deep chasm with no bottom in sight", "A group of boulders arranged in a circle", "A damp wall covered in soft mold", "A recess in the wall, covered in slimy mold", "A large patch of soft fungus", "A cavern with a strong echo", "A claustrophobic tunnel with a low ceiling", "A forked path with tracks for mine carts", "An overturned mine cart", "An unlit lantern mounted to the wall", "A glowing lantern mounted to the wall", "A swirling vein of ore visible in the wall", "A wide vein of ore visible in the wall", "A partially excavated wall with plentiful ore", "A heap of excavated rock"];
  const You_notice = ["Some broken mining equipment", "Some old dry bones", "Evidence of a recent, brief encampment", "Evidence of an abandoned campsite", "An enormous spider web", "A wide slippery patch of mold on the floor", "The clatter of rocks falling", "Loose stones underfoot", "The clang of a pick breaking rock", "The distant sound of hammers at work", "A prospector’s mark scratched on the wall", "A cracked wooden beam overhead"];
  const The_mine_is_believed_to_be = ["Full of riches", "Full of riches", "A productive place to dig", "Becoming increasingly unprofitable", "Nearly dried up", "Nearly dried up"];
  const The_mine_is_controlled_by = ["A powerful, well-known merchant guild", "A wealthy noble house", "A partnership of a few prospectors", "A clan or collective of locals", "No one in particular; finders keepers", "A shadowy cabal of merchants", "A vicious warlord or mercenary captain", "A crime boss who’s never visited the site"];
  const Most_of_the_miners_are = ["Free men working for wages", "Low-level members of a guild", "Paid with a fraction of what they haul out", "Paid with credit at a merchant’s store", "Prisoners", "Slaves"];
  const arrayOfArraysEnum ={The_miners_are_hauling_out,The_mine$$$s_entrance_is,Most_of_the_mine_is,Material_excavated_from_the_mine_is,You_find,If_you_dig_deep_you$$$ll_find,The_creature_is,The_miners_complain_of_trouble_from_a_nearby_colony_of,You_see,You_notice,The_mine_is_believed_to_be,The_mine_is_controlled_by,Most_of_the_miners_are};
  const arrayOfArrays = [The_miners_are_hauling_out,The_mine$$$s_entrance_is,Most_of_the_mine_is,Material_excavated_from_the_mine_is,You_find,If_you_dig_deep_you$$$ll_find,The_creature_is,The_miners_complain_of_trouble_from_a_nearby_colony_of,You_see,You_notice,The_mine_is_believed_to_be,The_mine_is_controlled_by,Most_of_the_miners_are];
  const arrayOfInlinesEnum ={Other_gems,An_especially_rare_metal,Hidden_by_the_terrain,Hidden_by_vegetation,Difficult_to_access,Hauled_out_on_the_backs_of_uncommon_beasts_of_burden,The_floor_is_writhing_with_vermin};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_MinerMine = function(){
  const The_miner_has = ["A sweat-stained shirt", "Skin blackened with dust", "Hard, leathery hands", "Long whiskers", "An excited laugh", "A raspy voice"];
  const The_miner_is_looking_to = ["Get rich quick", "Get rich quick", "Make some coin to pay off a debt", "Make some coin to send home to family", "Make some coin to send home to family", "Share a drink while prying for rumors"];
  const The_miner_carries = ["A shovel and a pick", "A shovel and a pick", "A length of rope and a lantern", "A pouch of uncut gems or bits of raw ore", "A flask of strong spirits", "A flask of strong spirits"];
  const arrayOfArraysEnum ={The_miner_has,The_miner_is_looking_to,The_miner_carries};
  const arrayOfArrays = [The_miner_has,The_miner_is_looking_to,The_miner_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Monastry = function(){
  const Visitors_to_the_monastery_come_seeking = ["Ancient knowledge", "Mystic wisdom", "Spiritual guidance", "Prayers and healing", "Ales and other goods made on-site", "Refuge from war", "Shelter on a long journey", "The secret of true happiness", "Physical perfection", "The means to travel to another realm", "Training in a unique fighting style", "The tools and training to exact vengeance"];
  const The_monastery_is_known_for_its = ["Compassionate healers", "Sacred music", "Ancient wisdom", "Dark prophecies", "Stunning architecture", "Unusual architecture", "A famous sculpture or painting", "Lengthy prayer services and vigils", "Extensive library and scholarly debates", "Master brewers or vintners", "Powerful mystics", "Indefatigable warriors"];
  const The_monastery_complex_is_located = ["On a hilltop overlooking a small village", "On a hilltop not far from a large city", "On a remote mountaintop", "On the side of a mountain", "Deep within a forest", "Near a desert oasis", "Belowground", "In the heart of a city"];
  const The_monastery_complex_is = ["A tight cluster of buildings (or chambers)", "A cluster of buildings with gardens, lawns, and yards in the spaces between", "A cluster of interconnected buildings", "Buildings ringed by a fence or low wall", "Buildings ringed by a defensible stone wall", "A single large building", "A large main building with several smaller support buildings located nearby", "A fortress with walls and watchtowers or sentry posts", "A labyrinthine series of small buildings", "Symmetrically divided into two wings"];
  const This_building_or_chamber_is = ["A chapel or shrine", "A dormitory", "A cloister", "A refectory (dining hall)", "A library", "A balneary (bath)", "An infirmary", "A sanatorium or hospice", "A school", "A forge", "A brewery", "A barn"];
  const Many_of_the_monastery$$$s_ceilings_are = ["Uncomfortably close to your head", "Connected to the floor by columns", "Connected to the floor by columns", "Painted with mythological scenes", "Painted with mythological scenes", "Domes or cupolas"];
  const The_buildings_or_chambers_are = ["Decorated with statues", "Decorated with stone arches and columns", "Adorned with painted wood and plaster", "Sturdy structures of finished wood", "Solid structures of oven-fired clay bricks", "Behind large metal doors INLINE"];
  const Behind_large_metal_doors = ["brass", "bronze", "gold", "iron", "steel", "tin"]; 
  const Many_of_the_interior_walls_are = ["Rough hewn stone", "Smooth cut stone", "Painted or lacquered wood", "Unfinished hardwood", "Decorated with intricate mosaics", "Decorated with elaborate murals", "Decorated with relief carvings", "Decorated with sacred texts and runes"];
  const You_notice = ["A small altar set in an alcove in the wall", "The sound of bells ringing in a tower", "A wall sconce holding many candles", "Tall candles on holders, taller than a man", "The tinkle of chimes from a nearby room", "A tapestry depicting a mythological scene", "A small fountain or reflecting pool", "The sound of a gong from another room", "A large holy symbol embedded in the wall", "A huge book of sacred texts or prayers", "The scent of incense burning nearby", "A kneeler beneath a small statue or icon", "An oil lamp with colored glass panels", "A mosaic set into the floor of the room", "A wide fresco or mural depicting a mythological scene", "The pipes of an indoor plumbing system running along the wall", "Robes and cassocks hanging on hooks", "An ornamental rug", "The sound of chanting from another room", "A statue of a recognizable figure"];
  const You_come_upon = ["A bright-eyed student", "An exhausted student", "A patient initiate", "A fierce martial artist", "A dogmatic teacher", "An eccentric scholar", "A wise old master", "A traveler from afar", "A member of the monastery’s serving staff", "A member of the monastery’s guard", "A strange energy", "A feeling that you’re being watched"];
  const The_monastery_guards_the_secret_to = ["World peace", "Inner peace", "Spiritual enlightenment", "Total consciousness", "Apotheosis", "Armageddon", "Ritual transformation into a god’s avatar", "Unsealing a portal to another realm", "Instant and irreversible death", "The perfect pint of ale"];
  const The_secret_is_known_to = ["Everyone, but the specifics are hidden", "Everyone, but the specifics are hidden", "Monks that perform a particular service", "Several of the monastery’s masters", "A single master and a single student", "A single master and a single student"];
  const arrayOfArraysEnum ={Visitors_to_the_monastery_come_seeking,The_monastery_is_known_for_its,The_monastery_complex_is_located,The_monastery_complex_is,This_building_or_chamber_is,Many_of_the_monastery$$$s_ceilings_are,The_buildings_or_chambers_are,Many_of_the_interior_walls_are,You_notice,You_come_upon,The_monastery_guards_the_secret_to,The_secret_is_known_to};
  const arrayOfArrays = [Visitors_to_the_monastery_come_seeking,The_monastery_is_known_for_its,The_monastery_complex_is_located,The_monastery_complex_is,This_building_or_chamber_is,Many_of_the_monastery$$$s_ceilings_are,The_buildings_or_chambers_are,Many_of_the_interior_walls_are,You_notice,You_come_upon,The_monastery_guards_the_secret_to,The_secret_is_known_to];
  const arrayOfInlinesEnum ={Behind_large_metal_doors};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_MonkIndividual = function(){
  const At_the_monastery_the_monk_is = ["A brewer or vintner", "A baker, butcher, or cook", "A carpenter, smith, or stonemason", "A farmer, gardener, or herder", "An instructor or scribe", "A leatherworker, ropemaker, or weaver"];
  const The_monk_is_an_expert_in = ["The power of the mind", "Realms beyond the material world", "Healing arts", "The journey of the soul", "Sacred texts", "The body's strengths and weaknesses"];
  const The_monk_has_recently_been_contemplating = ["The mysteries of death and life", "The meaning of dreams and dark omens", "The perfection of the mind, body, and soul", "The wisdom of an ancient philosopher", "The beauty and power of nature", "The balance of order and chaos"];
  const The_monk_prefers_to_meditate = ["In a shrine at the monastery", "In his or her personal cell", "In a garden", "Deep in the wilderness", "On the site of an ancient ruin", "While walking the roads of the world"];
  const The_monk_wears = ["A threadbare robe", "A comfortable linen robe", "A comfortable linen robe", "A cotton robe bearing the symbol of a god", "A clean silk robe with simple embroidery", "A clean silk robe with simple embroidery"];
  const The_monk$$$s_martial_arts_style_includes = ["Landing many rapid, open-hand slaps", "Landing a few powerful, close-fist punches", "Acrobatic flips and leaps", "A stumbling gait to keep foes off balance", "Landing many of rapid, spinning kicks", "Landing a few powerful kicks", "Striking pressure points to debilitate foes", "Explosive powders and distracting smoke"];
  const The_monk_carries = ["A wooden staff", "Several razor-sharp daggers", "An uncommon weapon INLINE", "A purse of silver to distribute to the poor", "A variety of healing potions and salves", "A set of prayer beads or a prayer book", "A heavy ring of keys", "A wineskin or flask"];
  const An_uncommon_weapon = ["kukri", "kusari-gama", "nunchaku", "scythe", "shuriken", "sickle"]; 
  const The_monk_prefers_to_drink = ["Ale", "Ale", "Tea INLINE", "Tea INLINE", "Wine", "Wine"];
  const Tea = ["black", "green", "white"]; 
  const The_monk_is_looking_for = ["New students", "The translation of an ancient manuscript", "Heretics and enemies of the order", "The location of an ancient ruin", "An opportunity to tell a fable", "The bottom of a goblet"];
  const arrayOfArraysEnum ={At_the_monastery_the_monk_is,The_monk_is_an_expert_in,The_monk_has_recently_been_contemplating,The_monk_prefers_to_meditate,The_monk_wears,The_monk$$$s_martial_arts_style_includes,The_monk_carries,The_monk_prefers_to_drink,The_monk_is_looking_for};
  const arrayOfArrays = [At_the_monastery_the_monk_is,The_monk_is_an_expert_in,The_monk_has_recently_been_contemplating,The_monk_prefers_to_meditate,The_monk_wears,The_monk$$$s_martial_arts_style_includes,The_monk_carries,The_monk_prefers_to_drink,The_monk_is_looking_for];
  const arrayOfInlinesEnum ={An_uncommon_weapon,Tea};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Mountain = function(){
  const You_find = ["A cavern behind a waterfall", "A small cave in the crook of a rock wall", "An entrance to a rocky cave", "A hole under a sheer cliff face", "A dark tunnel leading under the mountain", "A tunnel in a cliff face", "A tunnel leading into an abandoned mine", "A peculiar cabin", "A cozy little cabin", "An abandoned cabin", "An abandoned campsite", "A poorly marked grave or tomb", "An active mining camp", "An isolated monastery", "A strategically located watchtower", "A remote temple", "An ancient temple", "An abandoned watchtower", "A ruined monastery", "An enormous bird’s nest"];
  const You_see = ["A trickle of water flowing down a rock wall", "A small mountain lake of cold, fresh water", "A swiftly flowing small stream", "A natural bridge between two cliff faces", "A narrow gorge with walls close enough to climb between", "A deep gorge with no bottom in sight", "A set of deliberately stacked stones", "A large boulder eroded by the wind into the shape of a near-perfect sphere", "A group of stones arranged in a circle", "A boulder shaped to resemble a face", "A pair of narrow needle-like peaks", "A chimney-like column of rock", "A large boulder split in half like an egg", "A damp rock wall, covered in moss", "The fossilized bones of a great beast visible in a rock wall", "A thicket of hardy mountain shrubs growing atop a boulder", "A copse of scrawny trees", "A gorge where the wind whistles", "A gorge with a near perfect echo", "A rocky shoulder beneath a snowcap"];
  const You_notice = ["Abandoned, decrepit mining equipment", "Some old dry bones", "A small fossilized leaf", "Evidence of a recent encampment", "An enormous spider web", "An incredible view", "The clatter of rocks falling", "Loose stones underfoot", "An unstable rock wall", "A distant sound INLINE", "The name of a previous traveler carved into a boulder", "An ancient rune carved in a rock wall", "A scrawny tree growing with its roots spread over a small boulder", "The distant cry of a beast INLINE", "The wind whips up to a treacherous speed", "Snow flurries begin to fall", "The sound of birds chirping", "A flock of birds takes flight", "An old firepit", "Several puddles of cold water"];
  const A_distant_sound = ["scream", "drums", "hammers at work", "footsteps", "rocks crashing", "rocks crashing"]; 
  const The_distant_cry_of_a_beast = ["eagle", "eagle", "goat", "mountain lion", "wolf", "wolf"]; 
  const What$$$s_in_the_cave_or_cavern_or_tunnel = ["A mountain lion’s den", "Lots of bats", "Many spider webs", "A troll's stash", "An ogre's lair", "Some goblins' hideout", "Some abandoned mining equipment", "Bare rock", "A potable spring", "Unidentifiable remains", "Some outlaws’ hideout", "An orc war band", "A hungry ettin", "A band of dwarvish refugees", "A griffon’s nest", "A manticore’s den", "A basilisk’s lair", "A wyvern’s nest", "A clan of stone giants", "A sleeping dragon"];
  const Who_lives_or_lived_in_the_cabin = ["A fugitive from justice", "A stubborn miner", "A dwarvish prospector", "A dwarvish war veteran", "A gnomish wizard", "A mystic sage"];
  const Who_resides_in_the_abandoned_cabin_now = ["An owlbear", "An ogre", "A troll", "A mad witch", "A reclusive shapeshifter", "Restless ghosts", "An outcast orc", "A strange hermit"];
  const Who_camped_here = ["A party of orc scouts", "A goblin raiding party", "Some miners or prospectors", "A pair of wandering elves", "Some refugees or fugitives", "Someone whose purposes are unclear"];
  const Who_is_or_was_digging_in_this_mine = ["Greedy dwarves", "Greedy dwarves", "Ambitious humans", "Tricky goblins", "Tricky goblins", "Industrious kobolds"];
  const What_were_the_miners_digging_for = ["Copper", "Gems", "Gold", "Iron", "Silver", "A rare metal INLINE"];
  const A_rare_metal = ["adamantine", "electrum", "mithral", "platinum"]; 
  const What_lives_in_the_abandoned_mine_or_ancient_ruin_now = ["Ooze", "Carrion crawler", "Orcs", "Cloaker", "Otyugh", "Darkmantle", "Piercer", "Dwarves", "Roper", "Fungi", "Rust monster", "Kobolds", "Stirges", "Ghosts", "Trolls", "Mimics", "Umber hulk", "Myconids", "Wraiths", "Ogres"];
  const Who_built_this_monastery = ["An order of elementalist monks", "An order of mystics", "An extremely secretive order of monks", "An order of shadow monks", "An order of warrior monks", "An unknown order of monks"];
  const The_temple_was_built_to_honor = ["The sun god", "The god of the heavens", "The moon goddess", "The storm god", "The earth mother goddess", "A long-forgotten god"];
  const What_built_the_nest = ["A giant eagle", "A giant owl", "A clan of harpies", "A griffon", "A roc", "A wyvern"];
  const What_built_the_watchtower = ["An expansive empire", "A nearby kingdom", "An occupying army", "Elvish warriors from a past age", "A clan of orcs", "A goblin kingdom"];
  const Who_holds_the_watchtower_now = ["A disciplined military company", "A rowdy mercenary troop", "A band of desperate outlaws", "A handful of dwarves", "A clan of orcs", "A goblin war party", "Several harpies", "Ghostly warriors"];
  const You_come_upon = ["A lost prospector", "A solemn warrior", "An angry wraith", "A malevolent ghost", "A famous beasthunter", "A seasoned mountaineer", "A paranoid shapeshifter", "An ancient vampire", "Several homeless dwarves", "An eccentric peddler", "A contemplative monk", "A mountain lion", "A pair of harpies", "A flock of ravens", "Several orc raiders", "A hunting peryton", "A mated pair of manticores", "A trio of monstrous trolls", "A clan of stone giants at rest", "A roc tearing apart some prey"];
  const You_run_into = ["A perilous rockslide", "An icy rime across the path or road", "A tumbling boulder", "Loose rocks that make for poor footing", "A large boulder blocking the way", "A place where the path has fallen away leaving a narrow ledge on which to walk", "A place where the path or road slopes steeply down toward a cliff edge", "A sudden storm bringing heavy snow"];
  const arrayOfArraysEnum ={You_find,You_see,You_notice,What$$$s_in_the_cave_or_cavern_or_tunnel,Who_lives_or_lived_in_the_cabin,Who_resides_in_the_abandoned_cabin_now,Who_camped_here,Who_is_or_was_digging_in_this_mine,What_were_the_miners_digging_for,What_lives_in_the_abandoned_mine_or_ancient_ruin_now,Who_built_this_monastery,The_temple_was_built_to_honor,What_built_the_nest,What_built_the_watchtower,Who_holds_the_watchtower_now,You_come_upon,You_run_into};
  const arrayOfArrays = [You_find,You_see,You_notice,What$$$s_in_the_cave_or_cavern_or_tunnel,Who_lives_or_lived_in_the_cabin,Who_resides_in_the_abandoned_cabin_now,Who_camped_here,Who_is_or_was_digging_in_this_mine,What_were_the_miners_digging_for,What_lives_in_the_abandoned_mine_or_ancient_ruin_now,Who_built_this_monastery,The_temple_was_built_to_honor,What_built_the_nest,What_built_the_watchtower,Who_holds_the_watchtower_now,You_come_upon,You_run_into];
  const arrayOfInlinesEnum ={A_distant_sound,The_distant_cry_of_a_beast,A_rare_metal};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Necromancer = function(){
  const The_necromancer_is = ["A brilliant academy graduate", "A well-known villain", "A violent maniac", "A violent maniac", "An ambitious mage", "An ambitious mage"];
  const The_necromancer_is_looking_for = ["Test subjects", "A body—fresh if possible, decomposed just as good", "A body—fresh if possible, decomposed just as good", "Gullible souls", "Gullible souls", "A drink of absinthe and a ghost story"];
  const The_necromancer_carries = ["A twisted blackwood staff", "A tome of necromantic lore", "A tome of necromantic lore", "A rare alchemical substance", "A razor-sharp ceremonial dagger", "A razor-sharp ceremonial dagger"];
  const arrayOfArraysEnum ={The_necromancer_is,The_necromancer_is_looking_for,The_necromancer_carries};
  const arrayOfArrays = [The_necromancer_is,The_necromancer_is_looking_for,The_necromancer_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Neighbourhood = function(){
  const The_alchemist_is = ["An apothecary", "A hedge wizard", "An herbalist", "A poisonmaker", "A potioneer", "A pyromancer"];
  const The_alchemist_is_looking_for = ["Delivery help", "New recipes", "Purchasers", "Purchasers", "Rare ingredients", "Rare ingredients"];
  const The_alchemist_carries = ["Several vials of acid", "Several vials of acid", "Several curatives", "An unusual potion", "An unusual potion", "A pyrophoric substance"];
  const The_criminal_is = ["An assassin", "A con artist", "A gambler", "A poacher", "A smuggler", "A thief"];
  const The_criminal_is_looking_for = ["Accomplices for a specific task", "Revenge against a rival criminal", "An easy mark", "Extra muscle for some work", "Rumors that may lead to a big score", "A rowdy evening of carousing"];
  const The_criminal_carries = ["A crossbow with poisoned darts", "Several daggers", "A short sword", "A lucky charm", "The token of a love", "Letters for blackmail"];
  const The_law_official_is = ["A constable", "A sheriff", "A sheriff", "A guard captain", "A guard captain", "A magistrate"];
  const The_law_official_seeks_someone_to = ["Capture a fugitive", "Catch a thief", "Guard a specific location or person", "Investigate a disappearance", "Solve a murder mystery", "Have an ale with"];
  const The_law_official_carries = ["An arrest warrant for an outlaw", "A proclamation for a reward", "A knife or sword of the office", "A knife or sword of the office", "A pocketbook of local laws", "A pocketbook of local laws"];
  const The_noble_is = ["A knight", "An old lord", "A young lord", "An old lady", "A young lady", "A wealthy merchant"];
  const The_noble_seeks_someone_to = ["Dispose of an enemy", "Negotiate a trade contract", "Prepare an army for war", "Sabotage a rival", "Secure a marriage", "Have a good time with"];
  const The_noble_carries = ["Several deeds and titles", "A family heirloom", "Several inventories and invoices", "Some very valuable jewels", "A compromising love letter", "A letter from a powerful lord or lady"];
  const The_priest_is = ["An acolyte", "A healer", "A monk", "A preacher", "A scholar", "A witch-hunter"];
  const The_priest_is_looking_for = ["New converts", "New converts", "Heretics", "Relics and rare lore", "Relics and rare lore", "The bottom of a goblet"];
  const The_priest_carries = ["A well-used cudgel", "A prominently displayed holy symbol", "A pocketbook of sacred texts", "A wineskin"];
  const The_seer_is = ["An astrologer", "A fortune teller", "A lorekeeper", "A mysti", "A prophet", "A psychic"];
  const The_seer_is_looking_for = ["The answer to a riddle or prophecy", "The answer to a riddle or prophecy", "New clients for a reading", "New clients for a reading", "News regarding a missing person", "Some juicy gossip"];
  const The_seer_carries = ["A crystal ball", "A crystal ball", "A dowsing rod", "A large, sharp-pointed knife", "Several star charts", "Several star charts"];
  const The_smith_is = ["An armorer", "A blacksmith", "A blacksmith", "A farrier", "A farrier", "A weaponsmith"];
  const The_smith_is_looking_for = ["A new apprentice", "A new apprentice", "A journeyman craftsman", "Rare metals", "Rare metals", "A mug of strong ale"];
  const The_smith_carries = ["A hammer", "A hammer", "A metal trinket made by the smith", "A metal trinket made by the smith", "A contract commissioning a sword", "Little more than a few coins"];
  const The_traveler_is = ["An exile", "A minstrel", "A peddler", "A pilgrim", "A refugee", "A sellsword", "A storyteller", "A treasure hunter"];
  const The_traveler_is_seeking = ["Accomplices on a quest", "An audience to entertain", "The answer to a riddl", "A long lost friend", "The return of something stolen", "Revenge against a bitter rival", "A permanent home", "Steady work", "Traveling companions", "Drinking companions"];
  const The_server_greets_you_with = ["A mug of ale", "A goblet of wine", "A glass of water", "An offer to move to a better table", "A look of exasperation", "A warm handshake", "A pat on the back", "A pretty smile"];
  const The_server_is_looking_for = ["An excuse to kick you out", "Someone more important to talk to", "Someone to do some pest removal", "A big tip", "A good joke or story", "The bottom of a bottle"];
  const The_server_carries = ["A filthy rag", "A pristine silk handkerchief", "A piece of conspicuous jewelry", "A piece of conspicuous jewelry", "An unusual belt purse", "An unusual belt purse"];
  const arrayOfArraysEnum ={The_alchemist_is,The_alchemist_is_looking_for,The_alchemist_carries,The_criminal_is,The_criminal_is_looking_for,The_criminal_carries,The_law_official_is,The_law_official_seeks_someone_to,The_law_official_carries,The_noble_is,The_noble_seeks_someone_to,The_noble_carries,The_priest_is,The_priest_is_looking_for,The_priest_carries,The_seer_is,The_seer_is_looking_for,The_seer_carries,The_smith_is,The_smith_is_looking_for,The_smith_carries,The_traveler_is,The_traveler_is_seeking,The_server_greets_you_with,The_server_is_looking_for,The_server_carries};
  const arrayOfArrays = [The_alchemist_is,The_alchemist_is_looking_for,The_alchemist_carries,The_criminal_is,The_criminal_is_looking_for,The_criminal_carries,The_law_official_is,The_law_official_seeks_someone_to,The_law_official_carries,The_noble_is,The_noble_seeks_someone_to,The_noble_carries,The_priest_is,The_priest_is_looking_for,The_priest_carries,The_seer_is,The_seer_is_looking_for,The_seer_carries,The_smith_is,The_smith_is_looking_for,The_smith_carries,The_traveler_is,The_traveler_is_seeking,The_server_greets_you_with,The_server_is_looking_for,The_server_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_NobleHouse = function(){
  const The_house$$$s_colors_are = ["Grey / gunmetal", "Black", "White", "Red / scarlet", "Maroon", "Gold", "Sky blue", "Forest green", "Navy blue", "Royal blue", "Dark brown", "Violet", "Teal / turquoise", "Silver", "Yellow", "Bronze", "Orange", "Tan / khaki", "Olive green", "Brown / beaver"];
  const The_house$$$s_symbol_is = ["A weapon INLINE", "A piece of armor INLINE", "A celestial body INLINE", "A plant or part of a plant INLINE", "An aquatic beast INLINE", "A small beast INLINE", "A great beast INLINE", "A bird INLINE"];
  const A_weapon = ["arrow", "axe", "dagger", "hammer", "mace", "spear", "staff", "sword"]; 
  const A_piece_of_armor = ["breastplate", "gauntlet", "helm", "shield"]; 
  const A_celestial_body = ["sun", "moon", "star", "comet"]; 
  const A_plant_or_part_of_a_plant = ["apple", "barley", "briar", "fig", "grapes", "lily", "maple", "oak", "olive", "pine", "rose", "wheat"]; 
  const An_aquatic_beast = ["crab", "crocodile", "frog", "fish", "octopus", "whale"]; 
  const A_small_beast = ["badger", "bat", "beaver", "dog", "ferret", "fox", "hedgehog", "lizard", "rat", "scorpion", "snake", "spider"]; 
  const A_great_beast = ["bear", "boar", "bull", "dragon", "lion", "ox", "stag", "wolf"]; 
  const A_bird = ["cardinal", "dove", "eagle", "hawk", "mockingbird", "owl", "pelican", "raven", "rooster", "sparrow", "swan", "vulture"]; 
  const The_house_is = ["Ancient and well-respected by all houses, great and small", "Ancient and greatly diminished in standing from what it once was", "Old with the respect of many houses, great and small", "Old and struggling to maintain respect of other houses", "Old but often overshadowed by other houses", "Newly raised up to the nobility"];
  const The_best_known_member_of_the_house_is_or_was = ["A gallant knight", "A beautiful woman", "A ruthless tyrant", "An adept diplomat", "A famous traveler or explorer", "A brilliant military strategist", "A notorious rebel or outlaw", "A dashing swashbuckler", "A fearsome warrior", "A brilliant scholar", "A gifted orator", "A dangerous and mad ruler"];
  const who_had_a_role_in_a_or_an = ["Negotiation", "Assassination", "Rebellion", "Discovery", "Religious event", "Military battle"];
  const The_house$$$s_motto_champions_the_ideals_of = ["Hope", "Compassion", "Integrity", "Courage", "Justice", "Courtesy", "Loyalty", "Determination", "Mercy", "Discipline", "Patience", "Duty", "Righteousness", "Excellence", "Strength", "Faith", "Trust", "Generosity", "Wisdom", "Honor"];
  const The_current_head_of_the_house_is = ["A kindly old man or woman", "A ruthless old man or woman", "A wily old man or woman", "A charming man or woman", "A grim veteran of wars", "An astute politician", "A devout adherent of a religion", "A heartbroken widower or widow", "A hot-headed young man or woman", "A child"];
  const The_house$$$s_goals_include = ["Domination of the city or region's politics", "Domination of the city or region's trade", "Revenge against a rival house in the same city or region", "Revenge against a rival house in another city or region", "Sabotage of a group run by commoners—a guild, academy, religious faith, or secret society", "Fomenting rebellion against the city or region's ruling house", "Marriage with a powerful allied house", "Marriage with a powerful rival house"];
  const One_or_more_house_members_keep_secret = ["A long-time scandalous romance", "The existence of a bastard child", "A murder in one of the house's keeps, castles, or palaces", "Religious zealotry", "The birth of a malformed freak", "Treason against the region's sovereign", "The senility or madness of family members", "Criminal sabotage of a rival house"];
  const The_house$$$s_seat_of_power_is_located_in_or_near = ["A port city", "A range of high mountains", "A wide, fertile plain", "A fertile river valley", "An ancient forest", "A jagged coastline", "A sodden swamp", "A pristine lake", "A desert plateau", "An idyllic hill country"];
  const arrayOfArraysEnum ={The_house$$$s_colors_are,The_house$$$s_symbol_is,The_house_is,The_best_known_member_of_the_house_is_or_was,who_had_a_role_in_a_or_an,The_house$$$s_motto_champions_the_ideals_of,The_current_head_of_the_house_is,The_house$$$s_goals_include,One_or_more_house_members_keep_secret,The_house$$$s_seat_of_power_is_located_in_or_near};
  const arrayOfArrays = [The_house$$$s_colors_are,The_house$$$s_symbol_is,The_house_is,The_best_known_member_of_the_house_is_or_was,who_had_a_role_in_a_or_an,The_house$$$s_motto_champions_the_ideals_of,The_current_head_of_the_house_is,The_house$$$s_goals_include,One_or_more_house_members_keep_secret,The_house$$$s_seat_of_power_is_located_in_or_near];
  const arrayOfInlinesEnum ={A_weapon,A_piece_of_armor,A_celestial_body,A_plant_or_part_of_a_plant,An_aquatic_beast,A_small_beast,A_great_beast,A_bird};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_NobleIndividual = function(){
  const The_noble_is = ["A young lord", "A knight", "A young lady", "An old lord", "A rich merchant", "An old lady"];
  const he_noble_wears = ["Some flashy jewelry", "Shiny leather boots", "An ornate signet ring", "Fine silk clothes", "A handsome grin", "An extremely ugly scowl", "An arrogant sneer", "Beautifully-styled hair (and facial hair)"];
  const The_noble_has = ["A loud, deep laugh", "A high-pitched laugh", "A twittering nervous laugh", "A nervous habit of fidgeting", "A silver tongue", "A commanding presence", "Complete disregard for commoners", "Not a care in the world"];
  const The_noble_seeks_someone_to = ["Dispose of an enemy", "Negotiate a trade contract", "Deliver a letter", "Prepare an army for war", "Sabotage a rival", "Secure an advantageous marriage for himself or herself", "Secure an advantageous marriage for a friend or family member", "Have a good time with"];
  const The_noble_carries = ["Several deeds and titles", "A family heirloom", "Several inventories and invoices", "Some very valuable jewels", "A compromising love letter", "A letter from a powerful lord or lady"];
  const The_noble_is_respected_by = ["Most members of his or her house", "The head of his or her house, but few others", "His or her own mother, but few others", "The knights and sworn allies of his or her house", "A well known member of a rival house", "Merchants and moneylenders", "Soldiers and military leaders", "Scoundrels and thieves"];
  const The_noble_often_resides = ["In a castle built by his or her ancestors", "In a castle taken from a rival house", "In a palace in a large city", "On a quiet country estate", "In a lonely watchtower", "In the castle belonging to another noble house"];
  const arrayOfArraysEnum ={The_noble_is,he_noble_wears,The_noble_has,The_noble_seeks_someone_to,The_noble_carries,The_noble_is_respected_by,The_noble_often_resides};
  const arrayOfArrays = [The_noble_is,he_noble_wears,The_noble_has,The_noble_seeks_someone_to,The_noble_carries,The_noble_is_respected_by,The_noble_often_resides];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_NPC = function(){
  const The_person_has = ["Over-sized ears", "Long ear lobes", "Small ears", "Uneven ears", "Hairy ears", "Pointy ears", "Short ear lobes", "Ears that stick out"];
  const amidst = ["Thick hair", "Wispy hair", "Straight hair", "Wavy hair", "Curly hair", "Wiry hair", "Oily hair", "Lush hair"];
  const framing_their = ["Sleepy eyes", "Shifty eyes", "Watery eyes", "Bright eyes", "Cold eyes", "Smiling eyes", "Close-set eyes", "Wild eyes", "Distant eyes", "A lazy eye"];
  const which_sits_above = ["A crooked nose", "A bulbous nose", "A narrow nose", "A button nose", "A long nose", "A broad nose", "An angular nose", "A round nose"];
  const and_their = ["Full lips", "Buck-teeth", "Thin lips", "Rotting teeth", "Crooked teeth", "A broken or missing tooth", "Pursed lips", "Dry, cracked lips", "One or more false teeth", "A mouth that hangs open"];
  const He_or_she_has = ["A pronounced chin", "A cleft chin", "A dimple on the chin", "A rounded chin", "A sharp jawline", "A square jaw", "A round jaw", "An underbite"];
  const His_or_her_face_has = ["High cheekbones", "Tight, drawn cheeks", "Chubby cheeks", "An unpleasant pustule", "A large mole", "A beauty mark", "Freckles", "Terrible scarring"];
  const The_person_is = ["Unusually short", "Short in stature", "Average height", "Slightly above average height", "Well above average height", "Unusually tall"];
  const The_person$$$s_body_is = ["Thin and delicate", "Of average build", "Well-muscled", "Slightly overweight", "Grotesquely obese", "Lean and lanky", "Lithe and lean", "Thin and wiry", "Sinewy and strong", "Flabby and weak", "Lumpy or bent", "Covered in hair"];
  const The_person_possesses = ["Powerful hands", "Delicate hands", "Rough hands", "Soft hands", "A light touch", "A heavy touch"];
  const and = ["A jagged scar", "A jagged scar", "A dark purple scar", "An angry red scar", "A long, thin scar", "A long, thin scar"];
  const as_well_as = ["A dagger tattoo", "An arrow tattoo", "An anchor tattoo", "A skull tattoo", "A pair of crossed bones tattoo", "A snake tattoo", "A scorpion tattoo", "A spider web tattoo", "A heart tattoo", "A ring of thorns tattoo", "A mermaid tattoo", "A dragon tattoo"];
  const The_person_wears = ["An earring", "Two earrings", "A small chain about the neck", "A large chain about the neck", "A tight choker about the neck", "A brooch", "A ring", "Several rings", "A bracelet", "A nose ring"];
  const The_person$$$s_clothing_is = ["Crisp and new", "Fashionable and hip", "A bit old-fashioned", "Of the highest quality", "Faded, but in good condition", "Faded and patched", "Torn in places; missing buttons", "Tattered and worn"];
  const When_calm_the_person_is_typically = ["Compassionate", "Compassionate", "Compassionate", "Cheerful", "Cheerful", "Cheerful", "Cheerful", "Reserved", "Reserved", "Reserved", "Outspoken", "Outspoken", "Outspoken", "Uninterested", "Uninterested", "Uninterested", "Gruff", "Gruff", "Gruff", "Eager", "Eager", "Eager", "Deceitful", "Deceitful", "Deceitful", "Foolish", "Foolish", "Foolish", "Strict", "Strict", "Strict", "Agreeable", "Agreeable", "Agreeable", "Agreeable", "Mischievous", "Mischievous", "Mischievous", "Angry", "Angry", "Angry", "Fearful", "Fearful", "Fearful", "Manipulative", "Manipulative", "Manipulative", "Devout", "Devout", "Devout", "Greedy", "Greedy", "Greedy", "Greedy", "Funny", "Funny", "Funny", "Dour", "Dour", "Dour", "Fun-loving", "Fun-loving", "Fun-loving", "Lazy", "Lazy", "Lazy", "Driven", "Driven", "Driven", "Boastful", "Boastful", "Boastful", "Artistic", "Artistic", "Artistic", "Assertive", "Assertive", "Assertive", "Carefree", "Carefree", "Carefree", "Cautious", "Cautious", "Cautious", "Confident", "Confident", "Confident", "Confident", "Thoughtful", "Thoughtful", "Thoughtful", "Loyal", "Loyal", "Loyal", "Sophisticated", "Sophisticated", "Sophisticated", "Weak-Willed", "Weak-Willed", "Weak-Willed"];
  const When_stressed_the_person_often_becomes = ["Withdrawn", "Withdrawn", "Withdrawn", "Withdrawn", "Murderous", "Murderous", "Murderous", "Obsessive", "Obsessive", "Obsessive", "Authoritarian", "Authoritarian", "Authoritarian", "Determined", "Determined", "Determined", "Brave", "Brave", "Brave", "Spiteful", "Spiteful", "Spiteful", "Belligerent", "Belligerent", "Belligerent", "Caustic", "Caustic", "Caustic", "Reckless", "Reckless", "Reckless", "Reckless", "Argumentative", "Argumentative", "Argumentative", "Gluttonous", "Gluttonous", "Gluttonous", "Overly protective", "Overly protective", "Overly protective", "Angry", "Angry", "Angry", "Angry", "Cowardly", "Cowardly", "Cowardly", "Meticulous", "Meticulous", "Meticulous", "Sarcastic", "Sarcastic", "Sarcastic", "Stubborn", "Stubborn", "Stubborn", "Destructive", "Destructive", "Destructive", "Practical", "Practical", "Practical", "Pushy", "Pushy", "Pushy", "Fanatical", "Fanatical", "Fanatical", "Secretive", "Secretive", "Secretive", "Scornful", "Scornful", "Scornful", "Courageous", "Courageous", "Courageous", "Impractical", "Impractical", "Impractical", "Impractical", "Calculating", "Calculating", "Calculating", "Industrious", "Industrious", "Industrious", "Manipulative", "Manipulative", "Manipulative", "Destructive", "Destructive", "Destructive", "Compulsive", "Compulsive", "Compulsive", "Intolerant", "Intolerant", "Intolerant"];
  const Now_the_person_is = ["Focused", "Agreeable", "Suspicious", "Carefree", "Tired", "Curious", "Withdrawn", "Eager", "Disagreeable", "Friendly", "Agitated", "Happy", "Angry", "Hopeful", "Despondent", "Upbeat", "Gloomy", "Indifferent", "Nervous", "Bored"];
  const The_person_is_a = ["Quiet true believer", "Casual observer", "Critical student", "Outspoken cynic", "Open-minded seeker", "Broken heretic", "Cautious listener", "Fanatical true believer"];
  const The_person_is_prejudice_against = ["Other genders", "An age group INLINE", "A social class INLINE", "Social deviants INLINE", "A profession INLINE", "A race INLINE"];
  const An_age_group = ["children", "teenagers", "elderly"]; 
  const A_social_class = ["rulers", "powerful rich", "destitute poor"]; 
  const Social_deviants = ["beggars", "drunks", "junkies"]; 
  const A_profession = ["farmers", "artists", "clergy", "soldiers", "fishers", "harlots", "miners", "merchants", "scholars", "herders", "sailors", "mages"]; 
  const A_race = ["dwarves", "elves", "gnomes", "goblins", "half-breeds", "halflings", "humans", "orcs", "reptilians"]; 
  const The_person = ["Fidgets", "Drinks too much", "Eats too much", "Swears often", "Has poor hygiene", "Can’t resist flirting", "Can’t stop staring", "Sweats profusely and easily", "Is a habitual liar", "Embellishes the truth", "Exaggerates details", "Has a short temper", "Is melodramatic", "Gossips", "Chews with an open mouth", "Often sniffs audibly", "Believes what you tell him/her", "Is skeptical of everything", "Paces", "Makes poor eye contact"];
  const arrayOfArraysEnum ={The_person_has,amidst,framing_their,which_sit_above,and_their,He_or_she_has,His_or_her_face_has,The_person_is,The_person$$$s_body_is,The_person_possesses,and,as_well_as,The_person_wears,The_person$$$s_clothing_is,When_calm_the_person_is_typically,When_stressed_the_person_often_becomes,Now_the_person_is,The_person_is_a,The_person_is_prejudice_against,The_person};
  const arrayOfArrays = [The_person_has,amidst,framing_their,which_sit_above,and_their,He_or_she_has,His_or_her_face_has,The_person_is,The_person$$$s_body_is,The_person_possesses,and,as_well_as,The_person_wears,The_person$$$s_clothing_is,When_calm_the_person_is_typically,When_stressed_the_person_often_becomes,Now_the_person_is,The_person_is_a,The_person_is_prejudice_against,The_person];
  const arrayOfInlinesEnum ={An_age_group,A_social_class,Social_deviants,A_profession,A_race};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_OrcClan = function(){
  const The_orcs_are = ["Nomadic hunters, following game", "Raiders displaced from their native lands", "In exile from their native lands", "In the service of a sovereign warlord", "A loose confederacy of tribes and families related by blood", "Degenerate survivors from a broken army", "Disorganized; a clan of competing warriors", "A tight-knit war band", "Hell bent on sowing chaos and mayhem", "Raiders after supplies and slaves", "Marching to war under the leadership of a great chief", "On an errand for an evil wizard or other powerful being"];
  const The_orcs_value = ["Survival", "Bravery", "Kill counts", "Strength", "Scalps", "Virility", "Steel", "Honoring the gods", "Meat", "Battle-scars"];
  const The_orcs$$$_iconography_features = ["Symbols of death and destruction INLINE", "Symbols of death and destruction INLINE", "Symbols of the heavens INLINE", "Symbols of strength and weaponry INLINE", "Symbols of strength and weaponry INLINE", "A great beast INLINE"];
  const Symbols_of_death_and_destruction = ["bats", "bones", "crows", "flames", "ghosts", "scorpions", "skulls", "vultures"]; 
  const Symbols_of_the_heavens = ["clouds", "lightning", "moon", "stars"]; 
  const Symbols_of_strength_and_weaponry = ["arrows", "axes", "fists", "spears", "stones", "swords"]; 
  const A_great_beast = ["bears", "boars", "eagles", "lions", "snakes", "wolves"]; 
  const The_orcs$$$_chief_is = ["A well-respected chief", "A charismatic warlord", "A mysterious shaman", "A descendent of an honored hero", "A ruthless killer", "A brutish thug", "An impatient young warrior", "A wise old chief", "A celebrated war hero", "A prolific lover"];
  const The_orcs$$$_favorite_meat_comes_from = ["Dwarves and halflings", "Beggars and thieves", "Merchants and caravan guards", "Noblemen", "Noblewomen", "Priests and priestesses", "Slaves", "Circusfolk and minstrels", "Foreign travelers", "Peasant women", "Young children", "Elves and pixies"];
  const The_orcs$$$_current_attitude_is = ["Carefree and festive", "Rowdy and festive", "Rowdy and eager to fight", "Frightened and suspicious", "Hostile and suspicious", "Hostile and eager to fight"];
  const The_orcs_fear = ["Men armored in steel", "Spellcasters", "Members of a particular race INLINE", "The gods", "Aberrant evils", "Dragons"];
  const Members_of_a_particular_race = ["elves", "dwarves", "goblinoids", "reptilians"]; 
  const The_orcs_are_notorious_for = ["Never leaving survivors", "Feeding prisoners to wild beasts", "Tattooing or branding prisoners", "Scalping enemies", "Flaying enemies", "Raiding and burning villages", "Plundering merchant caravans", "Eating prisoners raw", "Claiming prisoners as slaves", "Taking prisoners as wives or concubines,"];
  const The_orcs_are_known_for = ["Screaming and shouting during battle", "Convening with ghosts and spirits", "Ritual animal sacrifice under a new moon", "Ritual humanoid sacrifice far belowground", "Ritualistic blood-letting", "Ritualistic sexual acts under the full moon", "Eating unusually-prepared meats", "Prolific amounts of drinking", "Never cutting their hair", "Shaving their heads and bodies", "Wearing long top-knots or braids", "Bathing and perfuming their bodies"];
  const The_orcs$$$_goals_include = ["Upheaval of the region’s politics", "Disruption of the region’s trade", "Revenge against another civilization", "Revenge against a rival orkish clan", "Spreading chaos and destruction", "Possession of a powerful artifact"];
  const The_orcs_typically_fight_with = ["Hit-and-run tactics", "Ambush tactics", "Unpredictable maneuvers", "Lots of screaming and shouting", "Kicking and stomping", "Lots of head-butting", "Lots of biting and scratching", "Frequent breaks for INLINE"];
  const Frequent_breaks_for = ["arguments", "arguments", "looting", "forming ranks", "forming ranks", "eating"]; 
  const As_slaves_the_orcs_keep = ["Dwarves", "Gnomes", "Goblins", "Halflings", "Humans", "Kobolds", "Undead servitors", "Nothing; the orcs eat all captives they take", "Nothing; the orcs leave no survivors", "Nothing; the orcs value freedom for all"];
  const As_guardians_or_pets_the_orcs_keep = ["Boars", "Dire rats", "Giant lizards", "Ogres", "Wargs", "Wolves"];
  const Most_of_the_orcs_are_wielding = ["Spears and large hunting knives", "Spears and javelins", "Exotic, curved blades and several bolas", "Huge, curved blades", "Exotic, curved blades and blowguns", "Pikes and shortswords", "Pikes and short bows", "Battleaxes and throwing axes", "Battleaxes and longbows", "Longswords and longbows", "Jagged greatswords and shortbows", "Greataxes and javelins"];
  const arrayOfArraysEnum ={The_orcs_are,The_orcs_value,The_orcs$$$_iconography_features,The_orcs$$$_chief_is,The_orcs$$$_favorite_meat_comes_from,The_orcs$$$_current_attitude_is,The_orcs_fear,The_orcs_are_notorious_for,The_orcs_are_known_for,The_orcs$$$_goals_include,The_orcs_typically_fight_with,As_slaves_the_orcs_keep,As_guardians_or_pets_the_orcs_keep,Most_of_the_orcs_are_wielding};
  const arrayOfArrays = [The_orcs_are,The_orcs_value,The_orcs$$$_iconography_features,The_orcs$$$_chief_is,The_orcs$$$_favorite_meat_comes_from,The_orcs$$$_current_attitude_is,The_orcs_fear,The_orcs_are_notorious_for,The_orcs_are_known_for,The_orcs$$$_goals_include,The_orcs_typically_fight_with,As_slaves_the_orcs_keep,As_guardians_or_pets_the_orcs_keep,Most_of_the_orcs_are_wielding];
  const arrayOfInlinesEnum ={Symbols_of_death_and_destruction,Symbols_of_the_heavens,Symbols_of_strength_and_weaponry,A_great_beast,Members_of_a_particular_race,Frequent_breaks_for};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_OrcIndividual = function(){
  const The_orc_has = ["Pale green skin", "Yellowish green skin", "Dirty brown skin", "Reddish brown skin", "Grey skin", "A tall frame", "A thick-set frame", "Bug eyes"];
  const and = ["A bone tattoo", "A dragon tattoo", "A skull tattoo", "A spear tattoo", "A spiderweb tattoo", "A tattoo of thorns"];
  const Even_among_orcs_the_orc_is_particularly_good_at = ["Tracking creatures by scent", "Identifying and following the tracks", "Running down prey", "Decapitating foes", "Impaling foes", "Roping captives", "Breaking slaves", "Handling savage beasts"];
  const The_orc_is_armored_in = ["Nothing", "Tattered leather", "Blood-stained leather", "Boiled leather", "The hides of scaly beasts", "The hides of furry beasts", "The hides of exotic beasts", "A helm and breastplate taken from a fallen enemy"];
  const The_orc_is_wielding = ["A spear", "A scimitar", "A falchion", "A pike", "A battleaxe", "A greatsword", "A greataxe", "A longbow"];
  const The_orc_is_looking_for = ["A good meal, fresh if possible", "A hearty meal, spoiled is not a problem", "A throat to cut or a head to bash", "A chance to prove itself in combat", "A place to rest and to sharpen weapons", "A strong drink"];
  const arrayOfArraysEnum ={The_orc_has,and,Even_among_orcs_the_orc_is_particularly_good_at,The_orc_is_armored_in,The_orc_is_wielding,The_orc_is_looking_for};
  const arrayOfArrays = [The_orc_has,and,Even_among_orcs_the_orc_is_particularly_good_at,The_orc_is_armored_in,The_orc_is_wielding,The_orc_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_OutlawIndividual = function(){
  const The_outlaw_has = ["A flashy earring ring", "Shiny leather boots", "A hole in the toe of one boot", "A dagger in each boot", "A mask on the face", "A wide-brimmed hat", "A dragon tattoo on the forearm", "A flame tattoo around the arm", "A maniacal laugh", "A bent, broken nose", "An open shirt and a very hairy chest", "Extravagant mustaches"];
  const The_outlaw_is_looking_for = ["Accomplices for a tricky job", "Revenge against a rival outlaw", "An easy mark or quick score", "Extra muscle for a tough job", "Rumors that may lead to a big score", "A rowdy evening of carousing"];
  const The_outlaw_carries = ["A tattered map", "A love letter", "A polished blade", "A wineskin", "A lute or pipe", "An ancient key"];
  const arrayOfArraysEnum ={The_outlaw_has,The_outlaw_is_looking_for,The_outlaw_carries};
  const arrayOfArrays = [The_outlaw_has,The_outlaw_is_looking_for,The_outlaw_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Outlaws = function(){
  const The_outlaw_band$$$s_primary_$$$business$$$_involves = ["Poaching from the sovereign's preserve or a prominent noble’s lands", "Harboring fugitives", "Harassing government officials and nobles who pass along the road", "Robbing caravans carrying gems, precious metals, and exotic goods", "Holding up incoming or outgoing ships or wagons", "Smuggling drugs—smokeleaf, a hallucinogenic mushroom, sleepysalt (a downer), sharpsugar (an upper)", "Smuggling rare antiquities", "Smuggling stolen goods", "Smuggling living things (exotic beasts, foreign harlots, fugitives, slaves)", "Serving as muscle for shady merchants and/or brothel-keepers"];
  const The_outlaw_band$$$s_colors_are = ["Brown / beaver", "Black", "Grey / gunmetal", "Gold", "Maroon", "Forest green", "Dark brown", "Bronze", "Olive green", "Tan / khaki"];
  const The_outlaw_band$$$s_symbol_is = ["A snake", "A skull", "A badger", "An arrow", "A spider", "A dagger", "A rat", "A goblet", "A wolf", "The moon", "A bear", "A star"];
  const The_outlaw_band$$$s_leader_is = ["A dangerous megalomaniac", "A charismatic demagogue", "A mysterious foreigner", "A talented thief", "A member of a prominent family", "A ruthless killer", "A femme fatale", "A charming rogue", "A dashing swashbuckler", "A brutish thug", "A devoted priest", "A well-known fugitive"];
  const The_outlaw_band$$$s_headquarters_is_hidden_in_or_near = ["The residence of a prominent noble", "The village’s market square", "A wayside inn", "A tavern", "A brothel", "An old lighthouse", "An abandoned cabin", "A waterfall", "A cave", "A dense forest"];
  const The_outlaw_band$$$s_members_are_primarily = ["Escaped slaves", "Idle artisans", "Poor peasants", "Former soldiers", "Vagrants", "Exiles / refugees"];
  const The_outlaw_band$$$s_goals_include = ["Domination of the region’s trade", "Sabotage of the region’s trade", "Revenge against a rival band of outlaws", "Revenge against the region’s elite", "Rebellion against the region’s elite", "Equality and freedom for all", "A wealthy and peaceful retirement", "Violence to slake their bloodlust"];
  const Members_of_the_outlaw_band_are_typically_armed_with = ["Wooden clubs", "Over-sized daggers", "Shortbows and arrows", "Longbows and arrows", "Daggers and crossbows", "Axes and knives", "Sticks and stones", "Shortswords", "Brass knuckles", "Daggers and sling shots"];
  const The_outlaw_band_is_feared_or_respected_by = ["Ambassadors and tax collectors", "Merchants and peddlers", "Politicians and magistrates", "Guards and sheriffs", "Soldiers and warriors", "Nobles and wealthy travelers", "Knights and loyalists", "Peasants and farmers", "Priests and sages", "Women and children"];
  const arrayOfArraysEnum ={The_outlaw_band$$$s_primary_$$$business$$$_involves,The_outlaw_band$$$s_colors_are,The_outlaw_band$$$s_symbol_is,The_outlaw_band$$$s_leader_is,The_outlaw_band$$$s_headquarters_is_hidden_in_or_near,The_outlaw_band$$$s_members_are_primarily,The_outlaw_band$$$s_goals_include,Members_of_the_outlaw_band_are_typically_armed_with,The_outlaw_band_is_feared_or_respected_by};
  const arrayOfArrays = [The_outlaw_band$$$s_primary_$$$business$$$_involves,The_outlaw_band$$$s_colors_are,The_outlaw_band$$$s_symbol_is,The_outlaw_band$$$s_leader_is,The_outlaw_band$$$s_headquarters_is_hidden_in_or_near,The_outlaw_band$$$s_members_are_primarily,The_outlaw_band$$$s_goals_include,Members_of_the_outlaw_band_are_typically_armed_with,The_outlaw_band_is_feared_or_respected_by];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_PackLycan = function(){
  const The_pack_is = ["A band of exiles and outcasts", "A roving band of outlaws and thieves", "A nomadic warrior clan", "A band of sought-after mercenaries", "An integral part of the local thieves’ or assassins’ guild", "A mercenary company in the service of a local lord or city watch", "A wild bunch of hunters and killers", "An ancient clan of warrior-hunters"];
  const The_pack$$$s_leader_is = ["A dangerous megalomaniac", "A charismatic demagogue", "A mysterious foreigner", "A talented thief", "An outcast from a prominent family", "A ruthless killer", "A femme fatale", "A former arena champion", "A disgraced knight", "A brutish thug", "A de-frocked priest", "A well-known fugitive"];
  const The_pack$$$s_attitude_toward_their_leader_is = ["Friendly and loyal", "Respectful and business-like", "Cautious and uncertain", "Terrified and tight-lipped", "Disappointed and disrespectful", "Agitated and restless"];
  const The_pack$$$s_goals_include = ["Becoming the region’s dominant predators", "Revenge against a rival band of lycanthropes or outlaws", "Revenge against the region’s elite", "Rebellion against the region’s elite", "A quiet and peaceful existence", "Violence to slake their bloodlust"];
  const arrayOfArraysEnum ={The_pack_is,The_pack$$$s_leader_is,The_pack$$$s_attitude_toward_their_leader_is,The_pack$$$s_goals_include};
  const arrayOfArrays = [The_pack_is,The_pack$$$s_leader_is,The_pack$$$s_attitude_toward_their_leader_is,The_pack$$$s_goals_include];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Pickpocket = function(){
  const In_the_mark$$$s_pocket_the_thief_finds = ["A scrap of paper or parchment with an unintelligible note scribbled on it", "A scrap of paper or parchment with a list of mundane items or tasks written on it", "Some lint or a bit of thread", "A lost button or broken piece of something", "An old or well-worn key (see below)", "A new or little-used key (see below)", "A clean handkerchief (see below)", "A soiled handkerchief (see below)", "A score (see below)", "A score (see below) INLINE"];
  const A_score = ["A scrap of paper or parchment with an unintelligible note scribbled on it", "A scrap of paper or parchment with a list of mundane items or tasks written on it", "Some lint or a bit of thread", "A lost button or broken piece of something", "An old or well-worn key (see below)", "A new or little-used key (see below)", "A clean handkerchief (see below)", "A soiled handkerchief (see below)"]; 
  const The_key_is = ["A small brass key", "A large brass key", "A thin brass key", "A heavy iron key", "A spindly iron key", "Made of an unusual material"];
  const The_handkerchief_is = ["A fine silk handkerchief", "A simple cotton handkerchief", "A lacy handkerchief", "A threadbare handkerchief", "A striped handkerchief", "A spotted handkerchief"];
  const The_thief_scores = ["1d​6 sp plus 1d​10 cp", "2d​4 cp", "2d​6 sp plus 1d​10 cp", "3d​​6 cp", "1d​4 gp plus 1d​10 sp", "1d​6 sp", "2d​4 gp plus 1d​10 sp", "2d​6 sp", "1d​4 gp", "A gem or small piece of jewelry (5d​10 gp)", "A gem (5d​10 gp) and roll this table again", "1d​6 gp and roll this table again"];
  const arrayOfArraysEnum ={In_the_mark$$$s_pocket_the_thief_finds,The_key_is,The_handkerchief_is,The_thief_scores};
  const arrayOfArrays = [In_the_mark$$$s_pocket_the_thief_finds,The_key_is,The_handkerchief_is,The_thief_scores];
  const arrayOfInlinesEnum ={A_score};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_PirateIndividual = function(){
  const The_pirate_has = ["A dagger tattoo", "An anchor tattoo", "A skull tattoo", "A pair of crossed bones tattoo", "A snake tattoo", "A fish tattoo", "A spider web tattoo", "An octopus tattoo", "A whale tattoo", "A lobster tattoo", "A mermaid tattoo", "A dragon tattoo"];
  const and = ["A nose ring", "Shiny leather boots", "Gold teeth", "An oversized dagger in the belt", "A heavy gold chain around the neck", "A wide-brimmed hat", "An eyepatch", "A long black beard", "A maniacal laugh", "A long, hooked nose", "An open shirt and a very hairy chest", "Extravagant mustaches"];
  const The_pirate_longs_to = ["Captain his own ship", "Retire peacefully, far from the sea", "Return to the arms of a long lost love", "Get married and settle down", "Get promoted due to his hard work", "Own his own shipping company", "Write a famous drinking song.", "Forget the demons of his past", "Retire peacefully in a seaside village", "Gain revenge against a sea monster", "Kill the captain; that guy's an asshole", "Be a pirate; a pirate’s life is a joy"];
  const The_pirate_carries_a = ["Rusty sword", "Polished blade", "Map case", "Silk handkerchief", "Wooden club", "Jagged dagger", "Empty bottle", "Bejeweled knife", "Hip flask", "Fancy compass"];
  const arrayOfArraysEnum ={The_pirate_has,and,The_pirate_longs_to,The_pirate_carries_a};
  const arrayOfArrays = [The_pirate_has,and,The_pirate_longs_to,The_pirate_carries_a];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_PoacherOutlaws = function(){
  const The_poachers$$$_favorite_prey_includes = ["Great beasts INLINE", "Exotic birds INLINE", "Deer INLINE", "Exotic beasts INLINE", "Game birds INLINE", "Small beasts INLINE"];
  const Great_beasts = ["bears", "wolves", "boars"]; 
  const Exotic_birds = ["eagle", "falcon", "hawk", "owl", "peafowl", "roc", "phoenix", "flamingo"]; 
  const Deer = ["elk", "harts", "moose", "stags"]; 
  const Exotic_beasts = ["lions", "tigers", "griffons", "hippogriffs", "elephants", "owlbears", "wyvern", "behemoths"]; 
  const Game_birds = ["quail", "grouse", "pheasant", "snipe", "duck", "partridge", "turkey", "swan"]; 
  const Small_beasts = ["fox", "otter", "raccoon", "badger", "beaver", "ermine", "sable", "skunk"]; 
  const The_poachers$$$_hunt = ["For sport", "To feed their families", "To feed the impoverished peasants", "To exact revenge on the landowner", "To sell the beasts’ meat", "To sell the beasts’ pelts"];
  const arrayOfArraysEnum ={The_poachers$$$_favorite_prey_includes,The_poachers$$$_hunt};
  const arrayOfArrays = [The_poachers$$$_favorite_prey_includes,The_poachers$$$_hunt];
  const arrayOfInlinesEnum ={Great_beasts,Exotic_birds,Deer,Exotic_beasts,Game_birds,Small_beasts};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_PriestTemple = function(){
  const The_priest_is = ["A devoted acolyte", "A dogmatic chaplain", "A wealthy chaplain", "A grim exorcist", "An adept healer", "A road-weary pilgrim", "A charismatic preacher", "An eccentric scholar", "A disillusioned scholar", "A battle-tested warpriest", "A sharp-witted witch-hunter", "An outspoken zealot"];
  const The_priest_has = ["A likable grin", "A hearty laugh", "An arrogant smirk", "A haughty sneer", "A humorless visage", "A habit of sighing", "A sad look on his or her face", "A kind look on his or her face", "A habit of pacing", "A habit of scratching his or her chin", "A habit of licking his or her lips", "A habit of muttering under his or her breath"];
  const The_priest_wears = ["A threadbare robe", "A sturdy wool cloak", "A comfortable linen robe", "A cotton robe with the symbol of a god embroidered on the lapel", "A clean silk robe with simple embroidery", "An expensive silk robe with elaborate gold embroidery", "Boiled leather armor", "Patchwork armor of leather and steel", "Chainmail armor with a priest’s hood", "Chainmail emblazoned with the symbol of a god"];
  const The_priest_carries = ["A well-used cudgel", "A shiny new mace", "A walking staff", "A staff with a crook", "A ceremonial dagger", "A prominently displayed holy symbol INLINE", "A pocketbook of sacred texts", "A notebook of hand-written prayers and devotions", "A variety of healing potions and salves", "A set of prayer beads", "A heavy ring of keys", "A wineskin"];
  const A_prominently_displayed_holy_symbol = ["bejeweled", "gilded", "iron", "silver", "steel", "wooden"]; 
  const The_priest_is_looking_for = ["New converts", "The translation of an ancient manuscript", "Heretics", "Sinners", "Donations", "Relics and rare lore", "Proof of a god’s existence", "The location of a ruined temple", "An opportunity to tell a fable", "The bottom of a goblet"];
  const arrayOfArraysEnum ={The_priest_is,The_priest_has,The_priest_wears,The_priest_carries,The_priest_is_looking_for};
  const arrayOfArrays = [The_priest_is,The_priest_has,The_priest_wears,The_priest_carries,The_priest_is_looking_for];
  const arrayOfInlinesEnum ={A_prominently_displayed_holy_symbol};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Prison = function(){
  const The_prison_is_located = ["On a small island on a remote coast", "On a small island near a city", "In a tower or annex of a castle", "Beneath a temple complex", "In an annex on a temple complex", "Beneath a town hall", "In an annex on a town hall", "Underneath a city, deep below ground", "Behind walls in a fortified rural location INLINE", "Below ground, in a hidden rural location INLINE", "Behind walls in a fortified wilderness location INLINE", "Below ground, in a hidden wilderness location INLINE"];
  const Behind_walls_in_a_fortified_rural_location = ["coast", "hills", "plains"]; 
  const Below_ground_in_a_hidden_rural_location = ["coast", "hills", "plains"]; 
  const Behind_walls_in_a_fortified_wilderness_location = ["desert, ", "forest, ", "hills", "mountains, ", "swamp", "tundra"]; 
  const Below_ground_in_a_hidden_wilderness_location = ["desert, ", "forest, ", "hills", "mountains, ", "swamp", "tundra"]; 
  const The_prison_was_built_by = ["A wise king or queen", "An ambitious lord or lady", "An evil tyrant", "A mighty warrior or warlord", "A just lawmaker", "A popular mayor or sheriff", "An unscrupulous king or queen", "A vain lord or lady", "A powerful witch or wizard", "A beloved sovereign", "A prosperous merchant guild", "A powerful noble house"];
  const The_prison_complex_is = ["A sprawling maze of twisting passages", "A sprawling maze of twisting passages", "A sprawling maze of long hallways", "Organized in neat rows of small cells or pits", "Organized in neat rows of small cells or pits", "Organized around a large cell block or pit"];
  const The_prison_is_surrounded_by = ["Very high stone walls", "Incredibly thick stone walls", "A curtain wall with many gatehouses", "A moat filled with putrescent water", "A moat filled with thick, boot-sucking mud", "A moat filled with sharp spikes"];
  const The_prison_was_built = ["In a past age", "In a past age", "Hundreds of years ago", "Hundreds of years ago", "A few decades ago", "Within the past decade"];
  const Prisoners_are_held_within = ["Individual cells, in silence and darkness", "Individual cells, in darkness but not silence", "Individual cells; but they can see and hear other prisoners", "Cells that accommodate two prisoners", "Cells that accommodate up to two prisoners, each shackled to the wall", "Cells that accommodate four prisoners", "Cells that accommodate up to four prisoners, each shackled to the wall", "A large chamber with many other prisoners, each shackled to the wall", "Individual pits or wells, open at the top", "A huge pit with many other prisoners"];
  const The_cells$$$_or_pits$$$_condition_is = ["Well-maintained; the walls are solid", "Aging, but sturdy; the walls have some cracks", "Aging, but sturdy; the walls have some cracks", "Decrepit; the walls are crumbling", "Decrepit; the walls are crumbling", "So dark it’s difficult to say"];
  const Prisoners_are_treated = ["Humanely; they receive reasonable meals, some exercise, and healing when needed", "Like dogs; they receive poor quality meals and enough healing to keep them alive", "Like dogs; they receive poor quality meals and enough healing to keep them alive", "Like rats; they receive terrible meals and are plagued by sickness", "Like rats; they receive terrible meals and are plagued by sickness", "Like they don’t exist; occasionally they receive food"];
  const This_chamber_is = ["A prison cell", "Another prison cell", "A passageway connecting cell blocks", "A guardroom", "The barracks", "The jailer’s quarters", "A yard or large indoor space for exercise", "A dining hall", "An interrogation room", "A torture chamber"];
  const You_notice = ["A wooden door reinforced with steel bands", "Steel bars where you expected a stone wall", "Empty manacles along the wall", "An empty sconce to hold a torch", "Distant torchlight", "The floor is uneven", "A crack in the stone floor", "A mouse skittering underfoot", "The stench of rotting flesh", "The scent of stale urine", "A putrid smell", "A dank and moldy odor", "An uncomfortable groaning", "A faint scratching sound", "An odd tapping sound", "The squeaking of rats", "The shouting of distant voices", "Howls of agony", "Horrific screams", "The clanking of chains"];
  const The_prison_is_known_for = ["Many prisoners dying in a terrible plague", "A mass escape in the past", "The escape of a famous criminal", "Being the final home of a famous criminal", "Being the final home of a legendary hero", "Being haunted by vengeful ghosts", "Its horrific torture pits", "Never suffering a successful escape", "Its unusual architectural style", "The quality of its meals"];
  const You_come_upon = ["A snoozing guard", "A pair of guards on patrol", "A quartet of guards playing cards or dice on their break", "A pack of trained hunting dogs commanded by a high-ranking guard who has been alerted of the escape attempt", "A law official on-site to interrogate another prisoner about an unrelated case", "An ear-splitting alarm triggers", "A wide, well-lit yard that must be crossed with guards watching it from towers", "A high wall directly in the path of escape", "A barred window in the path of escape", "The rat-infested kitchens and mess hall", "An imprisoned serial killer who also attempting to escape", "An imprisoned thief who is bent on revenge"];
  const According_to_rumor_within_the_prison$$$s_walls_lies = ["A secret tunnel to the outside", "The bones of a celebrated outlaw", "The preserved head of an ancient villain", "A terrible beast to which prisoners are fed", "A missing lord or lady", "A treasure stolen by a notorious prisoner", "A unique and terrible torture device", "The bones of a deposed king or queen"];
  const arrayOfArraysEnum ={The_prison_is_located,The_prison_was_built_by,The_prison_complex_is,The_prison_is_surrounded_by,The_prison_was_built,Prisoners_are_held_within,The_cells$$$_or_pits$$$_condition_is,Prisoners_are_treated,This_chamber_is,You_notice,The_prison_is_known_for,You_come_upon,According_to_rumor_within_the_prison$$$s_walls_lies};
  const arrayOfArrays = [The_prison_is_located,The_prison_was_built_by,The_prison_complex_is,The_prison_is_surrounded_by,The_prison_was_built,Prisoners_are_held_within,The_cells$$$_or_pits$$$_condition_is,Prisoners_are_treated,This_chamber_is,You_notice,The_prison_is_known_for,You_come_upon,According_to_rumor_within_the_prison$$$s_walls_lies];
  const arrayOfInlinesEnum ={Behind_walls_in_a_fortified_rural_location,Below_ground_in_a_hidden_rural_location,Behind_walls_in_a_fortified_wilderness_location,Below_ground_in_a_hidden_wilderness_location};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_PrisonerPrison = function(){
  const The_prisoner_has = ["A long scraggly beard", "A long scraggly beard", "A patchy beard", "A patchy beard", "Skin draped loosely over his bones", "Boils and sores on his skin"];
  const The_prisoner_is_here_because = ["He stole something", "He killed someone", "He raped someone", "He advocated rebellion and unrest", "He committed an act of fraud", "Someone confused him with someone else"];
  const arrayOfArraysEnum ={The_prisoner_has,The_prisoner_is_here_because};
  const arrayOfArrays = [The_prisoner_has,The_prisoner_is_here_because];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_QuartermasterCamp = function(){
  const The_quartermaster_is = ["A member of a merchant guild", "A member of a prominent family", "A member of a prominent family", "A survivor of a terrible battle wound", "A survivor of a terrible battle wound", "Secretly a coward"];
  const The_quartermaster_seeks_someone_to = ["Obtain hard-to-get provisions", "Obtain hard-to-get provisions", "Purchase contraband items", "Purchase contraband items", "Help win over a sweetheart", "Share a drink and a laugh"];
  const The_quartermaster_trades_in = ["Coins", "Coins", "Gems and trinkets", "Meat, foraged roots, and other provisions", "Meat, foraged roots, and other provisions", "Bones, scalps, teeth, or other grisly trophies"];
  const arrayOfArraysEnum ={The_quartermaster_is,The_quartermaster_seeks_someone_to,The_quartermaster_trades_in};
  const arrayOfArrays = [The_quartermaster_is,The_quartermaster_seeks_someone_to,The_quartermaster_trades_in];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_RestlessUndead = function(){
  const The_person_was = ["A farmer or herder", "A miner or fisher", "A slave or servant", "A laborer or unskilled worker", "A beggar or urchin", "A noble or knight", "An artist or craftsman", "A merchant or shopkeeper", "A barkeep or barmaid", "A barbarian or gladiator", "A minstrel or singer", "A priest or monk", "An herbalist or healer", "A soldier or sellsword", "A hunter or assassin", "A cultist or preache", "A thief or bandit", "A smuggler or con artist", "A sailor or pirate", "An alchemist or seer"];
  const The_person_died_from = ["Hanging or strangulation", "Beheading", "A stab wound or beating", "Blunt trauma or being crushed", "Drowning", "A plague", "A gastrointestinal illness", "A respiratory illness", "An infected wound", "Poisoning", "Falling from a great height", "A horse or wagon accident", "A venereal disease", "An allergic reaction", "Shock", "A heart attack or stroke", "Liver failure", "Old age", "Natural causes", "Unknown causes or under mysterious circumstances"];
  const The_person$$$s_spirit_lingers = ["To seek vengeance", "To pine for lost love", "To bemoan lost treasure", "Out of pure hatred of the living", "Out of jealousy of the living", "To covet the belongings of a specific individual", "To provide protection to a specific someone", "To warn a specific someone against danger", "To warn everyone against a specific danger", "To torment a specific someone", "To torment members of a specific group", "To torment anyone who crosses its path"];
  const The_person$$$s_spirit_can_move_on_if = ["Someone helps it achieve it's goal", "It saves the life of at least one other person", "It achieves its goal on its own", "It is destroyed", "It is driven from its current location", "It is given evidence of events that happened after the person's death", "It is made aware of the circumstances of the person's death", "It is forced to visit the location of the person's death", "It is given the opportunity to speak to a loved one", "It sufficiently satisfies its lust for blood", "It sufficiently satisfies its lust for human touch", "The Hells freeze over"];
  const arrayOfArraysEnum ={The_person_was,The_person_died_from,The_person$$$s_spirit_lingers,The_person$$$s_spirit_can_move_on_if};
  const arrayOfArrays = [The_person_was,The_person_died_from,The_person$$$s_spirit_lingers,The_person$$$s_spirit_can_move_on_if];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Retainer = function(){
  const The_servant_is = ["A squire from a powerful noble house", "A squire from a minor noble house", "A squire of common birth", "A frightened link boy", "An long-time valet", "A reformed criminal-turned valet", "The son of an enemy", "A mysterious foreigner", "A journeyman smith or armorer", "A simple-minded stable hand", "An expert on horses", "A camp follower or harlot"];
  const The_servant_works_for = ["The steady pay", "The adventure", "The training and advancement opportunies", "No reason, other than being told", "A chance to escape from life imprisonment", "Romantic devotion"];
  const On_the_servant$$$s_face_is = ["A large wart", "An unsightly scar", "A look of determination", "A foolish grin", "A stupid stare", "A look of confusion", "A long, hooked nose", "Pronounced ears"];
  const arrayOfArraysEnum ={The_servant_is,The_servant_works_for,On_the_servant$$$s_face_is};
  const arrayOfArrays = [The_servant_is,The_servant_works_for,On_the_servant$$$s_face_is];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_RobberOutlaws = function(){
  const The_robbers_strike_with = ["Swarm tactics", "Hit-and-run tactics", "Ambush tactics", "Choreographed maneuvers", "Unpredictable maneuvers", "Lots of fancy footwork"];
  const The_robbers_are_known_for = ["Never leaving survivors", "Branding captives", "Scalping captives", "Burning wagons and ships", "Using explosives", "Romantic escapades", "Singing bawdy songs", "Drinking too much ale"];
  const arrayOfArraysEnum ={The_robbers_strike_with,The_robbers_are_known_for};
  const arrayOfArrays = [The_robbers_strike_with,The_robbers_are_known_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_SavageHorde = function(){
  const The_barbarians_are = ["A tribe of nomads, following game", "A tribe that began raiding after being displaced from their native lands", "A clan exiled from their native lands", "A clan in the service of a sovereign", "A confederacy of related tribes or clans", "The degenerate survivors of a broken army"];
  const The_barbarians_travel = ["On foot", "On foot with small carts", "On foot with mounted scouts", "On mounts", "On mounts with wagons", "In small watercraft"];
  const The_barbarians_value = ["Bravery", "Strength", "Wisdom", "Virility", "Honoring the gods", "Honoring their ancestors", "Battle-scars", "Kill counts"];
  const The_barbarians$$$_iconography_features = ["Symbols of death and destruction INLINE", "Symbols of death and destruction INLINE", "Symbols of the heavens INLINE", "sun", "Symbols of strength and weaponry INLINE", "Totem beasts INLINE", "Totem beasts INLINE"];
  const Symbols_of_death_and_destruction = ["bats", "bones", "crows", "flames", "ghosts", "scorpions", "skulls", "vultures"]; 
  const Symbols_of_the_heavens = ["clouds", "lightning", "moon", "sno"]; 
  const Symbols_of_strength_and_weaponry = ["arrows", "axes’", "fists", "spears", "stones", "sword"]; 
  const Totem_beasts = ["bears", "boars", "eagles", "horses", "lions", "wls", "snakes", "wolves"]; 
  const The_barbarians$$$_leader_is = ["A well-respected chief", "A charismatic warlord", "A mysterious prophet", "A descendent of an honored hero", "A ruthless killer", "A brutish thug", "An impatient young warrior", "A wise old man", "A celebrated war hero", "A prolific lover"];
  const The_barbarians_are_notorious_for = ["Never leaving survivors", "Feeding prisoners to wild beasts", "Tattooing or branding prisoners", "Scalping enemies", "Flaying enemies", "Raiding and burning villages", "Plundering merchant caravans", "Eating prisoners", "Claiming prisoners as slaves", "Taking prisoners as wives, concubines, or catamites"];
  const The_barbarians_are_known_for = ["Screaming and shouting during battle", "Convening with ghosts and spirits", "Ritual animal sacrifice", "Ritual human sacrifice", "Ritualistic blood-letting", "Ritualistic sexual acts", "Eating unusual meats", "Prolific amounts of drinking", "Never cutting their hair", "Shaving their heads and bodies", "Never bathing", "Bathing and perfuming their bodies"];
  const The_barbarians$$$_attitude_is = ["Rowdy and festive", "Joyful and eager to fight", "Relaxed and carefree", "Frightened and suspicious", "Hostile and suspicious", "Hostile and eager to fight"];
  const arrayOfArraysEnum ={The_barbarians_are,The_barbarians_travel,The_barbarians_value,The_barbarians$$$_iconography_features,The_barbarians$$$_leader_is,The_barbarians_are_notorious_for,The_barbarians_are_known_for,The_barbarians$$$_attitude_is};
  const arrayOfArrays = [The_barbarians_are,The_barbarians_travel,The_barbarians_value,The_barbarians$$$_iconography_features,The_barbarians$$$_leader_is,The_barbarians_are_notorious_for,The_barbarians_are_known_for,The_barbarians$$$_attitude_is];
  const arrayOfInlinesEnum ={Symbols_of_death_and_destruction,Symbols_of_the_heavens,Symbols_of_strength_and_weaponry,Totem_beasts};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_SavageIndividual = function(){
  const The_warrior_is_armored_in = ["Nothing", "Tattered leather", "Blood-stained leather", "Boiled leather", "The hides of scaly beasts", "The hides of furry beasts", "The hides of exotic beasts", "Armor taken from a fallen enemy"];
  const The_warrior_is_wielding = ["A spear and a hunting knife", "A spear and a shield", "An exotic, curved blade", "A huge, curved blade", "An over-sized hammer", "An enormous club", "A greataxe", "A battleaxe and a shield", "Several handaxes", "A greatsword", "A pair of long knives", "A longspear and hunting knife"];
  const The_warrior_is_also_carrying = ["Several throwing spears", "Several throwing axes", "Many throwing knives", "A shortbow", "A longbow", "A greatbow", "A blowgun", "Several bolas"];
  const The_warrior_fights_with = ["Hit-and-run tactics", "Making a mad charge", "Relentless repeated blows", "Lots of taunts and jeers", "Never breaking eye contact", "Lots of head-butting"];
  const The_barbarians_fear = ["Foreigners wearing a particular color of clothing INLINE", "Foreigners armored in steel", "Foreigners with facial hair", "Foreign women", "All foreigners", "Members of a particular race INLINE", "A particular natural phenomenon INLINE", "Spellcasters", "The gods", "Dragons"];
  const Foreigners_wearing_a_particular_color_of_clothing = ["red", "gold", "green", "blue", "purple", "white", "black", "grey"]; 
  const Members_of_a_particular_race = ["dwarves", "dwarves", "elves", "goblinoids", "reptilian humanoids", "reptilian humanoids"]; 
  const A_particular_natural_phenomenon = ["blizzards", "earthquakes", "floods", "thunderstorms", "volcanoes", "typhoons"]; 
  const The_warrior_is = ["A practiced hunter", "A poorly-trained slave", "A veteran of many wars", "A mystical shaman", "An expert scout", "A master weaponcrafter", "A superb herbalist", "A beast handler", "An insufferable braggart", "A drunk", "A favorite among the men", "A favorite among the ladies"];
  const On_the_warrior$$$s_face_is = ["A bone through a nose piercing", "A bone earing", "An empty eye socket", "A grisly scar", "A serious expression", "A look of sadness", "A carefree grin", "A ruined nose", "Some terrifying war paint", "A frame of long, beautiful long hair", "An unruly beard", "A long, braided mustache"];
  const On_the_warrior$$$s_body_is = ["A tattoo of a great beast INLINE", "A tattoo of a skull and some bones", "A tattoo of a weapon INLINE", "A festering wound", "A noticeable battle scar", "A large burn scar", "A ceremonial brand", "An intimidating amount of muscle", "An awful lot of war paint", "A whole lot of hair"];
  const A_tattoo_of_a_great_beast = ["bear", "boar", "dragon", "eagle", "lion", "wolf"]; 
  const A_tattoo_of_a_weapon = ["arrow", "axe", "spear", "sword"]; 
  const arrayOfArraysEnum ={The_warrior_is_armored_in,The_warrior_is_wielding,The_warrior_is_also_carrying,The_warrior_fights_with,The_barbarians_fear,The_warrior_is,On_the_warrior$$$s_face_is,On_the_warrior$$$s_body_is};
  const arrayOfArrays = [The_warrior_is_armored_in,The_warrior_is_wielding,The_warrior_is_also_carrying,The_warrior_fights_with,The_barbarians_fear,The_warrior_is,On_the_warrior$$$s_face_is,On_the_warrior$$$s_body_is];
  const arrayOfInlinesEnum ={Foreigners_wearing_a_particular_color_of_clothing,Members_of_a_particular_race,A_particular_natural_phenomenon,A_tattoo_of_a_great_beast,A_tattoo_of_a_weapon};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_SeaB = function(){
  const The_beast_is = ["A scorpion", "A beetle", "A serpent", "A centipede", "A spider", "A drake", "A turtle", "A horse", "A worm", "A lion", "A wyvern", "A monkey"];
  const The_beast_has = ["Lidless, golden eyes", "Unblinking, green eyes", "Iridescent scales or fur", "Dull, bluish grey scales or fur", "Brightly colored scales or fur", "Wide gills", "A long fin running down its back", "Oversized webbed feet or flippers"];
  const and = ["Swims with a slithering motion", "Swims with powerful fins or flippers", "Propels itself with its strong, finned tail", "A wide-open, fish-like mouth", "Rows of wicked looking teeth", "Scuttles along the sea floor", "Waits to strike from a nook in a reef", "Waits to strike from a hole in the sea floor"];
  const The_beast_is_looking_for = ["Some fish to eat", "Something warm-blooded to eat", "A new place to hide", "A mate or a nesting site", "Shiny baubles and trinkets", "A place where food is plentiful"];
  const arrayOfArraysEnum ={The_beast_is,The_beast_has,and,The_beast_is_looking_for};
  const arrayOfArrays = [The_beast_is,The_beast_has,and,The_beast_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_SerialKiller = function(){
  const The_killer_is = ["A quiet artisan", "An eccentric scholar", "A mysterious foreigner", "A talented artist", "A polite shopkeeper", "A creepy peddler", "A femme fatale", "A charming rogue", "A hardened criminal", "A brutish thug", "A religious fanatic", "A veteran soldier"];
  const The_killer$$$s_modus_operandi_is = ["Ingested poison or allergic reaction", "Contact poison applied to a weapon", "Arrow/bolt from range", "Impaling", "Knife in the chest or back", "Multiple stab wounds", "Slitting the throat", "Gutting or eviscerating", "Flaying", "Beheading", "Strangulation", "Hanging", "Burying alive", "Drowning", "Boiling alive", "Throwing off a roof", "Severe beating", "Dismemberment", "Burning alive", "Feeding to animals"];
  const The_killer_is_often_armed_with = ["Poisoned daggers", "Throwing knives", "An over-sized dagger", "A serrated knife", "A crossbow", "A hammer or axe", "A bow and arrows", "A cudgel", "A sickle or scythe", "A garrote and dagger", "Poisoned projectiles", "Bare fists"];
  const The_killer$$$s_purposes_include = ["Sowing fear", "Sowing destruction", "Sowing chaos", "Satisfying personal bloodlust", "Gaining vengeance by hunting down a set of specific individuals", "Vigilante justice"];
  const The_killer_leaves_a_victim = ["In a signature pose", "In a signature location", "With a note on the corpse", "With a piece of the corpse missing", "With an unusual object planted on the corpse", "Where the corpse will never be found"];
  const The_killer_typically_plans_murders_for = ["Just after sunrise", "Just after sunset", "Well into the night", "The toll of midnight", "After midnight", "Just before sunrise"];
  const The_killer$$$s_base_of_operations_is_hidden_in_or_near = ["The killer’s own residence", "An artisan's shop or guildhall", "A merchant's office", "A tavern", "A brothel", "A warehouse or shipyard", "A temple complex", "The city's sewers", "An abandoned guildhall or warehouse", "An armory or barracks", "The residence of a wealthy individual or prominent citizen", "The killer is a transient"];
  const The_killer$$$s_favorite_victims_are = ["Fishermen and sailors", "Beggars and thieves", "Merchants and moneychangers", "Young noblemen", "Young noblewomen", "Old noblewomen", "Gamblers and drunks", "Priests and monks", "Priestesses", "Serving girls", "Slaves", "Barmaids", "Harlots and madames", "Circus performers", "Foreign travelers", "Farmwives", "Peasant girls", "Inquisitive children", "Young children", "Other killers and criminals"];
  const The_killer_refuses_to_kill = ["Ugly women", "Beautiful women", "Pregnant women", "Shy children", "Bold children", "Anyone with blue eyes", "Anyone with green eyes", "Anyone with blonde hair", "Anyone with red hair", "Anyone who is blind, deaf, or lame"];
  const The_killer_often_wears = ["Old worn boots", "Shiny leather boots", "A mask covering the face", "A wide-brimmed hat", "A cap pulled low", "A low-cut shirt", "Tight-fitting clothes", "A fake mustache"];
  const The_killer_carries = ["The weapon used in his or her first kill", "A trophy from his/her first kill", "A trophy from every one of his or her kills", "A ledger listing each and every one of his or her kills", "A token stolen from his or her next mark", "A journal describing in gory detail each and every one of his or her kill", "An exotic weapon", "A highly polished weapon", "A weapon with runes carved into it", "A weapon with a gem embedded in the pommel", "A weapon with soft leather tassels dangling from the pommel", "A weapon made of an unusual material INLINE"];
  const A_weapon_made_of_an_unusual_material = ["blackened steel", "bone", "coral", "crude iron", "obsidian", "stone"]; 
  const The_killer_is_unusually_fond_of_or_particular_regarding = ["Horticulture and floral arrangements", "Fashion trends", "Gourmet cooking", "Personal health and fitness", "Arms and armor maintenance", "Small animals", "High quality fabrics and leathers", "Foreign music", "Theater troupes and dancers", "Fine wines", "Social status", "Facial hair"];
  const arrayOfArraysEnum ={The_killer_is,The_killer$$$s_modus_operandi_is,The_killer_is_often_armed_with,The_killer$$$s_purposes_include,The_killer_leaves_a_victim,The_killer_typically_plans_murders_for,The_killer$$$s_base_of_operations_is_hidden_in_or_near,The_killer$$$s_favorite_victims_are,The_killer_refuses_to_kill,The_killer_often_wears,The_killer_carries,The_killer_is_unusually_fond_of_or_particular_regarding};
  const arrayOfArrays = [The_killer_is,The_killer$$$s_modus_operandi_is,The_killer_is_often_armed_with,The_killer$$$s_purposes_include,The_killer_leaves_a_victim,The_killer_typically_plans_murders_for,The_killer$$$s_base_of_operations_is_hidden_in_or_near,The_killer$$$s_favorite_victims_are,The_killer_refuses_to_kill,The_killer_often_wears,The_killer_carries,The_killer_is_unusually_fond_of_or_particular_regarding];
  const arrayOfInlinesEnum ={A_weapon_made_of_an_unusual_material};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_ServantCamp = function(){
  const The_servant_is = ["A squire from a noble house", "A frightened link boy", "A long-time valet or reformed criminal", "A reformed criminal-turned valet", "A prisoner of war", "A mysterious foreigner", "A simple-minded stable hand", "An expert on horses"];
  const The_servant_has = ["An awkward gait", "Incredibly large hands", "Incredibly large hands", "Quite an odor", "A ragged beard", "A ragged beard"];
  const The_servant_wants_to = ["Earn a little silver", "Go back home", "Show off an animal’s new trick", "Train with weapons and be a hero", "Earn the affection of his or her master", "Have a drink and a rest"];
  const arrayOfArraysEnum ={The_servant_is,The_servant_has,The_servant_wants_to};
  const arrayOfArrays = [The_servant_is,The_servant_has,The_servant_wants_to];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_ShadowB = function(){
  const The_beast_is = ["A raven", "A bat", "A serpent", "A centipede", "A spider", "A monkey", "A vulture", "An owl", "A wolf", "A panther", "A wyvern", "A rat"];
  const The_beast_has = ["Dark, sinister eyes", "Pale, glowing eyes", "Dark stripes or markings", "Eerie grey coloration", "Venomous fangs", "Blackened teeth", "An aura of gloom", "An odor of death"];
  const and = ["Can disappear into shadows", "Can teleport in a swirl of shadows", "Moves without a sound", "Speaks in rhymes and riddles", "Gives you an uneasy feeling", "A mournful howl or cry"];
  const The_beast_is_looking_for = ["A soul to devour", "Dead flesh to eat", "Something to kill", "A place to lair among ghosts", "The location of an ancient lich's tomb", "A dark hole in which to wait for prey", "Share a tale of terror and death", "The loathsome mage who summoned it"];
  const arrayOfArraysEnum ={The_beast_is,The_beast_has,and,The_beast_is_looking_for};
  const arrayOfArrays = [The_beast_is,The_beast_has,and,The_beast_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_SmugglerOutlaws = function(){
  const The_smuggling_ring$$$s_primary_modus_operandi_involves = ["Underground tunnels", "Secret compartments", "Stealth watercraft", "Humanoid mules", "Bribery of officials", "A network of safehouses"];
  const The_smuggling_ring_is_supported_by = ["A prominent merchant", "An important minister or magistrate", "A major crime boss", "A pirate captain", "An admiral", "A group of subversives", "The local guard captain or sheriff", "The sovereign’s main rival"];
  const arrayOfArraysEnum ={The_smuggling_ring$$$s_primary_modus_operandi_involves,The_smuggling_ring_is_supported_by};
  const arrayOfArrays = [The_smuggling_ring$$$s_primary_modus_operandi_involves,The_smuggling_ring_is_supported_by];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_SnakeCultist = function(){
  const The_cultist_is = ["A cunning warrior", "A stealthy assassin", "A stealthy assassin", "A fanatical priestess", "A foolish zealot", "A foolish zealot"];
  const The_cultist_is_looking_to = ["Recruit new members to the cult", "Recruit new members to the cult", "Warn outsiders away from the cult", "Collect captives for human sacrifice", "Collect captives for human sacrifice", "Slip some poison into someone’s drink"];
  const The_cultist_carries_or_wears = ["Several eggs stolen from a snake’s nest", "A necklace or bracelet of snake fangs", "A necklace or bracelet of snake fangs", "Snakeskin armor or boots", "A book of prayers and curses", "A book of prayers and curses"];
  const arrayOfArraysEnum ={The_cultist_is,The_cultist_is_looking_to,The_cultist_carries_or_wears};
  const arrayOfArrays = [The_cultist_is,The_cultist_is_looking_to,The_cultist_carries_or_wears];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_SoldierCamp = function(){
  const The_soldier_fights_for = ["The steady pay", "Pure bloodlust", "A chance to escape from life imprisonment", "A chance at vengeance", "God and country", "Fortune and glory"];
  const On_the_soldier$$$s_face_is = ["An unsightly scar", "A haughty sneer", "A look of sadness", "A look of sadness", "An eager grin", "An eager grin"];
  const The_soldier_carries = ["A highly polished blade", "A letter from a fallen comrade", "A letter from a fallen comrade", "A trophy from a fallen enemy", "A trophy from a fallen enemy", "A ribbon from a faraway maiden"];
  const arrayOfArraysEnum ={The_soldier_fights_for,On_the_soldier$$$s_face_is,The_soldier_carries};
  const arrayOfArrays = [The_soldier_fights_for,On_the_soldier$$$s_face_is,The_soldier_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_SoldierIndividualCamp = function(){
  const The_soldier_is = ["A farm boy", "The son of a miner or fisherman", "A veteran of gladiatorial combat", "A veteran of warfare", "A prisoner of war", "A political dissident", "The son of a poor man", "A drunk", "A fugitive criminal", "A former pirate", "A failed craftsman", "A favorite among the ladies"];
  const The_soldier_fights_for = ["The steady pay", "The love of someone he cannot have", "Pure bloodlust", "A chance to deal out sadistic torment", "A chance at vengeance", "Gold to repay debts", "Gold to aid a family member", "A chance to escape from life imprisonment", "A chance at redemption", "God and country", "Fortune and glory", "Strength and honor"];
  const On_the_soldier$$$s_face_is = ["A large wart", "An eyepatch", "An unsightly scar", "A haughty sneer", "A look of sadness", "A stupid grin", "An eager grin", "A frame of long, beautiful long hair", "Ferocious sideburns", "A neatly-trimmed goatee", "An unruly beard", "A lush, thick mustache"];
  const The_soldier_carries = ["A blade with soft leather tassels dangling from the pommel", "A blade with a carved hilt (ivory, jade, soapstone, ebony, mahogany, or oak)", "A blade with beasts sculpted into the steel of the guard (dragons, lions, scorpions, snakes, spiders, or wolves)", "A blade made of blackened steel", "A highly polished blade", "A token from a sweetheart", "A token from a parent", "A letter from a fallen comrade", "A trophy from a fallen enemy", "A ribbon from a faraway maiden"];
  const arrayOfArraysEnum ={The_soldier_is,The_soldier_fights_for,On_the_soldier$$$s_face_is,The_soldier_carries};
  const arrayOfArrays = [The_soldier_is,The_soldier_fights_for,On_the_soldier$$$s_face_is,The_soldier_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Song = function(){
  const The_song_is_about = ["A young common woman INLINE", "A common woman INLINE", "A noblewoman INLINE", "A priestess INLINE", "A witch INLINE", "A wizard INLINE", "A warrior INLINE", "A rogue INLINE", "A priest INLINE", "A common man INLINE", "A nobleman INLINE", "A great beast INLINE", "A diminutive beast INLINE", "An aquatic creature INLINE", "A bird INLINE", "A monster INLINE", "An event INLINE", "A wild location INLINE", "A settled place INLINE", "An item or object INLINE"];
  const and = ["A young common woman INLINE", "A common woman INLINE", "A noblewoman INLINE", "A priestess INLINE", "A witch INLINE", "A wizard INLINE", "A warrior INLINE", "A rogue INLINE", "A priest INLINE", "A common man INLINE", "A nobleman INLINE", "A great beast INLINE", "A diminutive beast INLINE", "An aquatic creature INLINE", "A bird INLINE", "A monster INLINE", "An event INLINE", "A wild location INLINE", "A settled place INLINE", "An item or object INLINE"];
  const A_young_common_woman = ["smith's daughter", "farmer's daughter", "miner's daughter", "Innkeeper's daughter", "harlot", "lady's maid"]; 
  const A_common_woman = ["barmaid", "farmwife", "housemaid", "fisherman's wife", "merchant's wife", "seamstress"]; 
  const A_noblewoman = ["beautiful maiden", "young princess", "ugly princess", "old queen", "wicked queen", "old widow"]; 
  const A_priestess = ["young novice", "high priestess", "sister of mercy", "old prude", "oracle", "zealot"]; 
  const A_witch = ["crone", "enchantress", "gypsy woman", "fortune teller", "potion-maker", "dark sorceress"]; 
  const A_wizard = ["alchemist", "conjurer", "necromancer", "pyromancer", "old wizard", "apprentice mage"]; 
  const A_warrior = ["barbarian", "gladiator", "guard captain", "young knight", "old knight", "sellsword"]; 
  const A_rogue = ["gambler", "jester", "outlaw", "pirate", "singer", "thief"]; 
  const A_priest = ["acolyte", "exorcist", "old priest", "healer", "monk", "preacher"]; 
  const A_common_man = ["farmer", "herder", "blacksmith", "miner", "sailor", "tailor"]; 
  const A_nobleman = ["wise king", "tyrant king", "old lord", "young lord", "handsome prince", "wealthy merchant"]; 
  const A_great_beast = ["bear", "boar", "dragon", "lion", "stag", "wolf"]; 
  const A_diminutive_beast = ["cat", "dog", "fox", "rat", "snake", "spider"]; 
  const An_aquatic_creature = ["frog", "fish", "mermaid", "octopus", "swan", "whale"]; 
  const A_bird = ["dove", "eagle", "mockingbird", "owl", "raven", "rooster"]; 
  const A_monster = ["devil", "demon", "ghost", "goblin", "ogre"]; 
  const An_event = ["battle", "captivity", "feast", "fair", "tournament", "wedding"]; 
  const A_wild_location = ["cave", "desert", "forest", "lake/river", "mountain", "sea"]; 
  const A_settled_place = ["castle", "garden", "inn/tavern", "market", "temple", "tomb"]; 
  const An_item_or_object = ["coin", "book", "goblet", "shield", "ship", "sword"]; 
  const The_song_is_popular_because = ["It was written by a legendary bard", "It has a subversive double meaning", "It was banned by a tyrannical ruler", "It was banned by a priest or priestess", "It was a popular sovereign’s favorite", "It was sung at a magnificent wedding feast", "Its lyrics are bawdy and outrageous", "No one knows, but it has a catchy tune"];
  const The_song_is_commonly_sung_at = ["Pubs and scholarly ceremonies", "Pubs and military camps", "Religious ceremonies and festivals", "Royal courts and weddings", "Taverns and aboard ships", "Taverns and brothels", "Taverns and mining camps", "Tournaments"];
  const arrayOfArraysEnum ={The_song_is_about,and,The_song_is_popular_because,The_song_is_commonly_sung_at};
  const arrayOfArrays = [The_song_is_about,and,The_song_is_popular_because,The_song_is_commonly_sung_at];
  const arrayOfInlinesEnum ={A_young_common_woman,A_common_woman,A_noblewoman,A_priestess,A_witch,A_wizard,A_warrior,A_rogue,A_priest,A_common_man,A_nobleman,A_great_beast,A_diminutive_beast,An_aquatic_creature,A_bird,A_monster,An_event,A_wild_location,A_settled_place,An_item_or_object,A_young_common_woman,A_common_woman,A_noblewoman,A_priestess,A_witch,A_wizard,A_warrior,A_rogue,A_priest,A_common_man,A_nobleman,A_great_beast,A_diminutive_beast,An_aquatic_creature,A_bird,A_monster,An_event,A_wild_location,A_settled_place,An_item_or_object};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_SpookyLands = function(){
  const You_find = ["A cavern in a canyon wall", "A cave entrance, hidden by a boulder", "A small cave next to a dry river bed", "A large pit from which comes a low moan", "A hole under a large boulder", "A large burrow, beneath a twisted tree", "A secluded monastery on a dark mountain", "A temple ruin", "A pair of graves", "A peculiar tent", "A stone house sheltered by a canyon, gorge, or bluff", "An abandoned stone house", "Some nomads’ camp", "An abandoned campsite", "Some religious pilgrims’ camp", "Ruins of an ancient city", "An old watchtower", "An rocky cave, full of choking dust", "A mass grave on an old battlefield", "An ancient tomb"];
  const You_see = ["An oasis with foul-smelling water", "An oasis with a tree bearing rotten fruit", "An unusually large, prickly desert plant", "A pair of prickly plants from the same root", "A patch of desert flowers in a shady spot", "A patch of coarse grass next to a boulder, shrouded in a strange mist", "A rocky bluff", "A boulder shaped like a skull", "A pair of identical boulders, side by side", "A boulder sitting atop a larger boulder", "A rocky canyon with a pool of foul water", "A deep canyon with a trickle of foul water", "A narrow canyon filled with strange fog", "A trail marked with bones", "A dry river bed", "A ridge of rock with exposed fossils", "A ridge of jagged rock", "A mostly-buried, ancient monument", "Twelve large stones, arranged in a ring", "A sheer rock wall with a strange mist lingering overhead"];
  const You_notice = ["A buzzard circles overhead", "A vulture screams", "A flock of crows scatter", "A large beetle scuttles away", "A raven croaks", "A crow caws", "A rat scurries away", "A swarm of beetles crawl past", "A ghostly present flees", "A ghostly presence watches curiously", "A beast howls mournfully in the distance", "An eerie silence", "The wind kicks up dust", "The breeze stops", "The wind moans eerily", "Small loose stones tumble down a slope", "A dead palm tree", "A distant scream", "The smell of rotting flesh", "The smell of decay"];
  const This_desert_is = ["Boulder-strewn", "Rocky", "Forbidding", "Flat", "Jagged", "Bleak", "Wind-swept", "Rugged"];
  const Beneath_your_feet_the_soil_is = ["Black", "Cracked", "Dusty", "Hard-packed", "Purple", "Gravelly", "Grey", "Stony"];
  const You_come_upon = ["A shadow snake", "A flock of shadowravens", "A giant spider", "A giant centipede", "A pack of wolves", "A great beast of shadow", "An animated skeleton", "A malevolent ghost", "A restless ghost", "A pair of bandits", "A band of skeletal warriors", "A pair of ghouls", "A dust storm", "A thick, cold fog", "A strange hermit", "A lost traveler", "A destitute nomad", "A sword-wielding wraith", "A conniving fiend", "A terrifying dragon"];
  const You_run_into = ["A rockslide coming down a canyon wall", "A boulder rolling down a canyon wall", "A sinkhole; it suddenly opens beneath you", "A swift-moving river full of dead souls", "Persistent, strong winds kicking up dust", "A sudden, swirling dust storm", "A mirage of a city", "A mirage of an oasis"];
  const The_rains_come_to_this_desert = ["Once a year for a few days straight", "On a few days scattered through the year", "In torrents for a few weeks, leaving floods", "Only during a rare astronomical alignment", "Never; however, it does snow every winter", "Never; this place hasn’t had water in years"];
  const What$$$s_in_the_cave_or_cavern = ["A swarm of beetles", "Lots of bats", "Many spider webs", "A wight’s stash", "A ghoul’s lair", "Several skeletons", "Bare rock", "Mummified remains", "Some bandits’ hideout", "A reclusive witch", "A pair of shadow stalkers or phase cats", "A creepy hermit"];
  const What$$$s_in_the_hole_or_burrow = ["Centipedes", "A shadow snake", "Dry bones", "A giant spider", "A severed limb", "So many beetles", "A shadow cat", "Scorpions"];
  const Who_built_this_monastery = ["An order of assassin monks", "An order of assassin monks", "An order of demonic monks", "An order of shadow monks", "An order of shadow monks", "An order of warrior monks"];
  const The_temple_was_built_to_honor = ["An undead god", "The moon god", "A savage god", "The god of death", "An arch devil", "A spider goddess"];
  const Who_lives_in_the_peculiar_tent = ["A merchant of exotic goods", "A misanthropic shapeshifter", "An eccentric shadow monk", "A nomadic herder", "An outcast elf", "A nomadic warrio"];
  const Who_built_the_stone_house = ["A strange hermit", "A reclusive scholar", "An eccentric healer", "A poor goatherder", "Someone who left no trace", "A member of an ancient clan"];
  const Who_resides_in_the_stone_house_now = ["Spiders and bats", "A death houn", "A necromancer", "Several zombies", "Restless ghosts", "A mad sorcerer", "An evil witch", "A wild shapeshifter"];
  const Who_built_the_ancient_ruins = ["A fiendish cult", "A shadowfolk clan", "A dragon cult", "A dark elf queen", "A death cult", "An ambitious lich", "A forgotten king", "A forgotten empire", "A dark sorcerer", "Shadow monks"];
  const Who_lives_in_the_ancient_ruins_now = ["Starved ghouls", "A necromancer", "Restless ghosts", "Cursed mummies", "Shadow warriors", "Undead guardians", "Aberrant spirits", "Pair of manticores", "A dracolich", "Pack of death dogs"];
  const What_built_the_watchtower = ["A long-forgotten empire", "An order of shadow monks", "Mighty warriors from a past age", "An fiendish lord’s army", "An ancient elf-witch", "A legendary wizard"];
  const Who_holds_the_watchtower_now = ["The last remnant of a defeated army", "An order of holy knights", "A fiendish presence", "A hobgoblin war party", "Zombies at the ground level, bats upstairs", "Rats at ground level, spiders up above"];
  const Who_camped_here = ["An orkish war party", "A shadowfolk raiding party", "Some nomadic herders", "Some refugees or fugitives", "Someone who left a heap of fresh bones", "Someone whose purposes are unclear"];
  const Who_is_in_the_grave = ["Twisted bones", "A fallen adventurer", "An old woman", "A dismembered body", "A old man", "A pile of bones", "A child", "A hateful mummy", "A fair maiden", "An empty coffin"];
  const The_grave_is_covered_with = ["A large stone slab", "Fresh earth", "A worn marker", "Rotting flowers", "Scratch marks", "A carved stone"];
  const Whose_soul_or_remains_haunt_the_tomb = ["Dead monks", "An ancient king", "A demilich", "An ancient queen", "Twisted bones", "An ancient sorcerer", "Foul ghosts", "A powerful mummy", "Piles of bones", "Zombie warriors"];
  const arrayOfArraysEnum ={You_find,You_see,You_notice,This_desert_is,Beneath_your_feet_the_soil_is,You_come_upon,You_run_into,The_rains_come_to_this_desert,What$$$s_in_the_cave_or_cavern,What$$$s_in_the_hole_or_burrow,Who_built_this_monastery,The_temple_was_built_to_honor,Who_lives_in_the_peculiar_tent,Who_built_the_stone_house,Who_resides_in_the_stone_house_now,Who_built_the_ancient_ruins,Who_lives_in_the_ancient_ruins_now,What_built_the_watchtower,Who_holds_the_watchtower_now,Who_camped_here,Who_is_in_the_grave,The_grave_is_covered_with,Whose_soul_or_remains_haunt_the_tomb};
  const arrayOfArrays = [You_find,You_see,You_notice,This_desert_is,Beneath_your_feet_the_soil_is,You_come_upon,You_run_into,The_rains_come_to_this_desert,What$$$s_in_the_cave_or_cavern,What$$$s_in_the_hole_or_burrow,Who_built_this_monastery,The_temple_was_built_to_honor,Who_lives_in_the_peculiar_tent,Who_built_the_stone_house,Who_resides_in_the_stone_house_now,Who_built_the_ancient_ruins,Who_lives_in_the_ancient_ruins_now,What_built_the_watchtower,Who_holds_the_watchtower_now,Who_camped_here,Who_is_in_the_grave,The_grave_is_covered_with,Whose_soul_or_remains_haunt_the_tomb];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_StormB = function(){
  const The_beast_is = ["A manticore", "A basilisk", "An owlbear", "A boar", "An ox", "A drake", "A scorpion", "A griffon", "A serpent", "A hawk", "A wyvern", "A lizard"];
  const The_beast_has = ["Bright blue or white markings", "Zigzag stripes", "Broad, feathered or leathery wings", "Cold, grey eyes", "Watery, blue eyes", "A coat that always appears damp", "An aura of static electricity", "A windy aura"];
  const and = ["Flies erratically, fluttering in the wind", "Flies swiftly, like a bolt of lightning", "Causes the ground to quake with each step", "A loud, thunderous howl or cry", "Can conjure a raincloud wherever it goes", "Exhales lightning when it breathes", "Electrically shocks those who touch it", "Flies into a rage when struck by an attack"];
  const The_beast_is_looking_for = ["Something to electrocute or to drown", "A lair on high ground with a view of the land", "An individual marked by its master", "An opportunity to impress its master", "The remains of a long-dead storm titan", "An item that can call thunderstorms"];
  const arrayOfArraysEnum ={The_beast_is,The_beast_has,and,The_beast_is_looking_for};
  const arrayOfArrays = [The_beast_is,The_beast_has,and,The_beast_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Temmple = function(){
  const Worshipers_here_pray_to = ["One god and only one god", "One god primarily, but other gods occasionally or for specific petitions", "Several gods within a pantheon, but two gods above the rest", "An entire pantheon, petitioning each god for specific needs", "One god to whom the temple was not originally dedicated", "Several gods within a pantheon to whom the temple was not originally dedicated"];
  const The_temple_is_known_for = ["Miraculous healers", "Compassionate healers", "Beautiful priestesses", "Wonderful music", "Accurate prophecies", "Dark prophecies", "Stunning architecture", "Unusual architecture", "Incredible collection of artwork", "A famous sculpture or painting", "Lengthy prayer services and vigils", "Lively prayer services and debates"];
  const The_entrance_is_guarded_by = ["A sworn order of devout warriors", "Sellswords", "Frightening statues of monstrous beings", "Impressive, colossal statues of warriors", "Statues of beautiful maidens, beckoning visitors into a trap", "Nothing; the temple welcomes all"];
  const The_temple$$$s_main_floorplan_is = ["Circular", "Ellipsoidal", "Triangular", "Square", "Rectangular", "Pentagonal", "Polygonal with many sides INLINE", "Cruciform"];
  const Polygonal_with_many_sides = ["six", "seven", "eight", "nine", "ten", "twelve", "thirteen", "twenty"]; 
  const The_temple_complex_is = ["Simple; a large main worship chamber with a handful of functional rooms adjoining", "Simple with a large annex; the annex contains many chambers", "Simple with fortifications", "Multi-layered; upper or lower layers are inaccessible to most visitors", "Multi-winged; some wings are inaccessible to most visitors", "Arranged in a concentric fashion; inner areas are inaccessible to most visitors", "Labyrinthine; designed to deliberately confuse outsiders", "Simple with an intricate complex hidden beneath the main worship chamber"];
  const The_structure_includes = ["Impenetrable stone walls", "An intricate structure of stone arches and columns", "A colorful painted wood and plaster", "A sturdy structure of finished wood", "A solid structure of oven-fired clay bricks", "A large structure with immense metal doors INLINE"];
  const A_large_structure_with_immense_metal_doors = ["brass", "bronze", "gold", "iron", "steel", "tin"]; 
  const Many_of_the_interior_walls_are = ["Rough hewn stone", "Smooth cut stone", "Painted or lacquered wood", "Unfinished hardwood", "Decorated with intricate mosaics", "Decorated with elaborate murals", "Decorated with relief carvings", "Decorated with sacred texts and runes"];
  const Many_of_the_ceilings_are = ["Uncomfortably close to your head", "Connected to the floor by columns", "Painted with mythological scenes", "So high its difficult to make out details", "Vaulted", "Domes or cupolas"];
  const The_purpose_of_this_room_is = ["An armory or barracks", "A guardroom or sentry post", "A cell for solitary prayer", "A cell for prisoners", "An inquisition or torture chamber", "A priest’s office or audience chamber", "A sanitarium or infirmary", "A ceremonial pool, bath, or fountain", "A morgue or mortuary", "A crypt for a person of importance INLINE", "A room dedicated for specific rituals INLINE", "A chapel for a lesser deity, saint, or martyr", "A classroom or dormitory", "A library", "A priest’s quarters or robing room", "A banquet room or dining hall", "A kitchen or pantry", "A trophy room or art gallery", "A stable or kennel", "A workshop for temple craftsmen"];
  const A_crypt_for_a_person_of_importance = ["well-known hero", "powerful high priest", "obscure priest", "wealthy noble"]; 
  const A_room_dedicated_for_specific_rituals = ["conjurations", "divinations", "funerals", "healing miracles"]; 
  const You_notice = ["A small altar set in an alcove in the wall", "The sound of bells ringing in a tower", "A wall sconce holding many candles", "Tall candles on holders, taller than a man", "The tinkle of chimes from a nearby room", "A tapestry depicting a mythological scene", "A small fountain or reflecting pool", "The sound of a gong from another room", "A large holy symbol embedded in the wall", "A huge book of sacred texts or prayers", "The scent of incense burning nearby", "A kneeler beneath a small statue or icon", "An oil lamp with colored glass panels", "A mosaic set into the floor of the room", "A wide fresco or mural depicting a mythological scene", "The pipes of an immense organ running along the walls", "Robes and cassocks hanging on hooks", "An ornamental rug", "A screen to hide priests from view", "A statue of a recognizable figure"];
  const You_come_upon = ["A young priest or priestess", "An old priest or priestess", "A traveler from afar", "A regular, local worshiper", "A member of the temple’s serving staff", "A member of the temple’s guard"];
  const arrayOfArraysEnum ={Worshipers_here_pray_to,The_temple_is_known_for,The_entrance_is_guarded_by,The_temple$$$s_main_floorplan_is,The_temple_complex_is,The_structure_includes,Many_of_the_interior_walls_are,Many_of_the_ceilings_are,The_purpose_of_this_room_is,You_notice,You_come_upon};
  const arrayOfArrays = [Worshipers_here_pray_to,The_temple_is_known_for,The_entrance_is_guarded_by,The_temple$$$s_main_floorplan_is,The_temple_complex_is,The_structure_includes,Many_of_the_interior_walls_are,Many_of_the_ceilings_are,The_purpose_of_this_room_is,You_notice,You_come_upon];
  const arrayOfInlinesEnum ={Polygonal_with_many_sides,A_large_structure_with_immense_metal_doors,A_crypt_for_a_person_of_importance,A_room_dedicated_for_specific_rituals};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_temp = function(){
  const The_woodsman_is  = ["A fugitive from justice", "A strange herbalist", "A skilled hunter", "A desperate poacher", "A poor woodcutter", "A bearded lumberjack"];
  const The_woodsman_is_looking_to  = ["Track an unusual beast", "Find the lair of a rare beast", "Find a spot where a rare flower grows", "Find a place where game is plentiful", "Sell some of his wares", "Swap tales and rumors"];
  const The_woodsman_carries  = ["A sturdy hatchet", "A bundle of firewood", "A spear or walking staff", "A large knife and a hunting trap", "A finely made longbow", "A trophy or piece of a wild beast"];
  const arrayOfArraysEnum ={The_woodsman_is,The_woodsman_is_looking_to,The_woodsman_carries};
  const arrayOfArrays = [The_woodsman_is,The_woodsman_is_looking_to,The_woodsman_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_TheWatch = function(){
  const The_watch$$$s_colors_are = ["Brown / beaver", "Black", "White", "Red / scarlet", "Maroon", "Gold", "Sky blue", "Forest green", "Navy blue", "Royal blue", "Dark brown", "Silver"];
  const The_watch$$$s_symbol_is = ["An eagle", "A flame", "An owl", "A gauntlet", "A dragon", "A shield", "A lion", "A sword", "A raven", "The sun", "A wolf", "An eye"];
  const The_watch$$$s_captain_is = ["A religious zealot", "A scion from a prominent family", "An outcast from a prominent family", "A dashing swashbuckler", "A brutish thug", "A celebrated war hero", "An anointed knight", "A career soldier", "A grizzled veteran", "An adept investigator", "An erudite detective", "A devoted public servant"];
  const The_watch$$$s_attitude_toward_their_captain_is = ["Friendly and loyal", "Respectful and business-like", "Completely indifferent", "Cautious and uncertain", "Terrified and tight-lipped", "Disappointed and disrespectful"];
  const The_watch_is_known_for = ["Intimidation", "High morals", "Lechery", "Efficiency", "Cowardice", "Reliability", "Incompetence", "Brutality", "Intoxication", "Taking bribes", ". Rowdiness", "Corrupt dealings"];
  const Most_members_of_the_watch_are_outfitted_with = ["Rough-spun wool cloaks", "Whatever armor they can find", "Leather armor marked with the symbol of the watch", "Leather armor marked with the symbol of their city or lord", "Helms and breastplates emblazoned with the symbol of their city or lord", "Well-maintained chainmail"];
  const Most_members_of_the_watch_are_equipped_with = ["Maces and shields", "Maces and crossbows", "Staves and crossbows", "Shortswords and shields", "Shortswords and shortbows", "Halberds and crossbows", "Longswords and crossbows", "Longswords and shields", "Pikes and shortswords", "Pikes and shortbows"];
  const The_watch_captain$$$s_office_is = ["In the city or town hall building", "In the basement of a crafters’ guild", "Next to a temple or shrine", "Next to a market square or plaza", "On the top floor of a gatehouse", "In a wing of a palace or castle", "In the backroom of a tavern", "At the top of a watchtower"];
  const arrayOfArraysEnum ={The_watch$$$s_colors_are,The_watch$$$s_symbol_is,The_watch$$$s_captain_is,The_watch$$$s_attitude_toward_their_captain_is,The_watch_is_known_for,Most_members_of_the_watch_are_outfitted_with,Most_members_of_the_watch_are_equipped_with,The_watch_captain$$$s_office_is};
  const arrayOfArrays = [The_watch$$$s_colors_are,The_watch$$$s_symbol_is,The_watch$$$s_captain_is,The_watch$$$s_attitude_toward_their_captain_is,The_watch_is_known_for,Most_members_of_the_watch_are_outfitted_with,Most_members_of_the_watch_are_equipped_with,The_watch_captain$$$s_office_is];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_TheWatchGuard = function(){
  const The_guard_is = ["A farm boy", "The son of a miner or fisherman", "A veteran of warfare", "A foreigner", "The son of a poor man", "A drunk", "A reformed criminal", "A thug", "A failed craftsman", "A favorite among the ladies"];
  const The_guard_works_for = ["The steady pay", "A chance to deal out sadistic punishment", "Gold to repay debts", "Gold to aid a family member", "A chance to escape from life imprisonment", "Patriotic devotion"];
  const On_the_guard$$$s_face_is = ["A large wart", "An unsightly scar", "A look of determination", "A foolish grin", "A stupid stare", "A look of confusion", "A bulbous nose", "Bushy eyebrows", "Fearsome sideburns", "An unruly beard", "A neatly-trimmed mustache", "A beautiful, waxed mustache"];
  const The_guard$$$s_uniform_is = ["Pristine", "Clean and tidy", "Clean, but wrinkled", "Worn, but well-kept", "Full of food or wine stains", "Tattered and in bad need of repair", "A little too tight", "Two sizes too large"];
  const The_guard_carries = ["A blade with soft leather tassels dangling from the pommel", "A blade with an inscription", "A highly polished blade", "A token from a favorite harlot", "A trophy from a criminal", "A ribbon from a noble maiden", "A silk handkerchief", "A flask of wine", "A lucky charm (rabbit’s foot, old coin)", "A grocery list"];
  const arrayOfArraysEnum ={The_guard_is,The_guard_works_for,On_the_guard$$$s_face_is,The_guard$$$s_uniform_is,The_guard_carries};
  const arrayOfArrays = [The_guard_is,The_guard_works_for,On_the_guard$$$s_face_is,The_guard$$$s_uniform_is,The_guard_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_TheWatchInvestigator = function(){
  const The_constable_is = ["An eccentric priest", "A stoic monk", "A former soldier", "A mysterious foreigner", "A pompous windbag", "An accomplished scholar", "A violent drunk", "A criminal lackey", "A popular tavern patron", "Ruggedly handsome"];
  const The_constable_works_for = ["The steady pay", "A chance to bring evil-doers to justice", "Gold to repay debts", "Gold to support his addiction INLINE", "The joy of solving mysteries", "A chance for vengeance"];
  const Gold_to_support_his_addiction = ["drinking", "gambling", "drinking", "gambling", "harlots", "smoking"]; 
  const On_the_constable$$$s_face_is = ["A scar from a burn", "A jagged scar", "A hard-set jaw", "A friendly grin", "A faraway look", "A furrowed brow", "A pair of piercing eyes", "A broken nose", "Bushy eyebrows", "Unshaven stubble", "A neatly-trimmed beard", "An intimidating mustache"];
  const The_constable_carries = ["A magnifying lens", "A blade with a carved hilt INLINE", "A blade with beasts sculpted into the steel of the guard INLINE", "A blade made of blackened steel", "An unusual hat", "A clue from an unsolved crime", "A token from a lost love", "Props for several disguises", "Alchemical reference manual", "A pocket-sized almanac"];
  const A_blade_with_a_carved_hilt = ["ivory", "jade", "soapstone", "ebony", "mahogany", "oak"]; 
  const A_blade_with_beasts_sculpted_into_the_steel_of_the_guard = ["dragons", "lions", "scorpions", "snakes", "spiders", "wolves"]; 
  const The_constable_is_particularly_knowledgeable_on = ["City or national politics", "The law and legal proceedings", "Religious history and philosophy", "Grappling maneuvers or pugilism", "Ancient wars and military tactics", "The care and crafting of weapons", "Poisons and poisonmaking", "Medicines and the healing arts", "Subterranean survival", "Foreign customs and exotic artwork", "Tall tales and drinking songs", "Fine wines and gourmet food"];
  const arrayOfArraysEnum ={The_constable_is,The_constable_works_for,On_the_constable$$$s_face_is,The_constable_carries,The_constable_is_particularly_knowledgeable_on};
  const arrayOfArrays = [The_constable_is,The_constable_works_for,On_the_constable$$$s_face_is,The_constable_carries,The_constable_is_particularly_knowledgeable_on];
  const arrayOfInlinesEnum ={Gold_to_support_his_addiction,A_blade_with_a_carved_hilt,A_blade_with_beasts_sculpted_into_the_steel_of_the_guard};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Thieves2 = function(){
  const The_thief_is = ["A veteran dungeon delver", "A desperate footpad", "A reckless fortune seeker", "A well-known adventurer", "A brash, young fool", "A student of the craft", "A charismatic swindler", "A mysterious foreigner", "A femme fatale", "A charming rogue", "A dashing swashbuckler", "A brutish thug"];
  const The_thief_has = ["A long, hooked nose", "A bent, broken nose", "A cute little button nose", "A scar below the left eye", "Pockmarked cheeks", "High cheek bones", "A pointy chin", "A thug's tattoo on the arm INLINE", "A sailor's tattoo on the arm INLINE", "An open shirt and a very hairy chest", "A five o'clock shadow", "An extravagant mustache"];
  const A_thug$$$s_tattoo_on_the_arm = ["crossed bones", "dagger", "dragon", "eagle", "skull", "snake", "spider web", "thorns"]; 
  const A_sailor$$$s_tattoo_on_the_arm = ["anchor", "mermaid", "octopus", "whale"]; 
  const The_thief_wears = ["A flashy earring", "A dark red cape", "Shiny leather boots", "Boots with a hole in the left toe", "A leather baldric", "A wide-brimmed hat", "A heavy gold chain around the neck", "A long dark ponytail", "Luscious golden curls", "A ruffled shirt", "A stylish coat", "A handkerchief in his breast pocket"];
  const The_thief_carries = ["Some hemp rope and a silk handkerchief", "Several over-sized sacks", "Several torches and a much-used knife", "A pocketbook of notes and maps", "A dagger in each boot", "A beautiful antique scabbard", "A well-worn lantern", "Climbing gear—pitons, hammer, and rope", "An organized set of lockpicks", "A crowbar", "An adjustable lockpick", "A mask", "The token of a love", "Letters for blackmail", "A lucky charm INLINE", "A flask of oil", "A treasure map", "A flask filled with spirits", "A wineskin", "A little jar of mustache wax"];
  const A_lucky_charm = ["four-leafed clover", "rabbit's foot", "coin", "horseshoe"]; 
  const The_thief = ["Hums or sings while walking", "Constantly brushes hair from his/her face", "Laughs maniacally at everything", "Never smiles and never laughs", "Scratches the elbow frequently", "Picks at his or her teeth after meals"];
  const The_thief_is_armed_with = ["Brass knuckles", "A shortsword", "Several throwing knives", "A crossbow with poisoned bolts", "A narrow-bladed dagger", "A serrated dagger", "A club and a knife", "A rapier", "A hand crossbow", "A garrote and a dagger"];
  const The_thief$$$s_modus_operandi_is = ["Petty theft", "Burglary", "Shoplifting", "Mugging", "Pickpocketing", "Running heists of gems and precious metals", "Running heists of warehouses", "Holding up outgoing boats or wagons"];
  const The_thief_is_looking_for = ["Accomplices to carry out a job", "Revenge against a rival thief", "Revenge against an officer of the law", "An easy mark", "Extra muscle for a job", "Rumors that may lead to a big score", "An ear to listen to some boasting", "The location of storied item of value", "Someone more wealthy than you", "A rowdy evening of carousing"];
  const Recently_the_thief_has_been_operating_in_or_near = ["A residential district", "An artisan's shop or guildhall", "A merchant's office", "A inn", "A brothel", "A warehouse or shipyard", "A temple complex", "A cemetery", "The town hall", "An abandoned guildhall or warehouse", "The residence of a wealthy individual", "A shantytow", "A library or university", "The palac", "The market square", "A gatehouse", "A pub", "A tavern", "The docks", "The bridge"];
  const Aside_from_theft_the_thief_has_been_known_to_be_involved_in = ["Distributing drugs INLINE", "Fencing stolen gems and precious metals", "Assassinations that look like accidents", "Assassinations that frame someone else", "Running brothels INLINE", "Shaking down scandal-plagued city officials", "Shaking down legitimate local businesses for 'protection'", "Serving as muscle for shady merchants and/or brothel-keepers"];
  const Distributing_drugs = ["smokeleaf", "hallucinogenic mushrooms", "sleepysalt (a downer)", "sharpsugar (an upper)"]; 
  const Running_brothels = ["exotic", "low", "high-class"]; 
  const The_thief_prefers_to_operate = ["Alone", "With a tough-guy partner", "With a partner to serve as a look-out", "With a partner to create a diversion", "With a gang", "Wearing a mask"];
  const The_thief$$$s_favorite_marks_include = ["Fishermen and sailors", "Beggars and hobos", "Merchants and moneychangers", "Jewelers and gemcutters", "Politicians and magistrates", "Guards and sheriffs", "Soldiers and sellswords", "Musicians and storytellers", "Farmers and herders", "Servants and slaves", "Priests and sages", "Women and children", "Peasant girls and farm wives", "Young noblewomen", "Old women", "Noblemen", "Harlots and madames", "Peddlers and shopkeepers", "Barkeeps and barmaid", "Other thieves"];
  const arrayOfArraysEnum ={The_thief_is,The_thief_has,The_thief_wears,The_thief_carries,The_thief,The_thief_is_armed_with,The_thief$$$s_modus_operandi_is,The_thief_is_looking_for,Recently_the_thief_has_been_operating_in_or_near,Aside_from_theft_the_thief_has_been_known_to_be_involved_in,The_thief_prefers_to_operate,The_thief$$$s_favorite_marks_include};
  const arrayOfArrays = [The_thief_is,The_thief_has,The_thief_wears,The_thief_carries,The_thief,The_thief_is_armed_with,The_thief$$$s_modus_operandi_is,The_thief_is_looking_for,Recently_the_thief_has_been_operating_in_or_near,Aside_from_theft_the_thief_has_been_known_to_be_involved_in,The_thief_prefers_to_operate,The_thief$$$s_favorite_marks_include];
  const arrayOfInlinesEnum ={A_thug$$$s_tattoo_on_the_arm,A_sailor$$$s_tattoo_on_the_arm,A_lucky_charm,Distributing_drugs,Running_brothels};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Tomb = function(){
  const This_tomb_was_built_for = ["An ancient king", "An ancient queen", "An ancient high priest or priestess", "An ancient sorcerer", "A mighty warrior", "A terrible villain", "A legendary adventurer", "A celebrated war hero", "An unscrupulous king or queen", "A vain mayor or townmaster", "A powerful military commander or warlord", "A powerful witch or wizard", "A powerful priest or priestess", "A beloved sovereign", "A wealthy merchant", "A member of a noble house", "A member of the royal family", "The wife of a wealthy person or ruler", "The mother of a wealthy person or ruler", "The child of a wealthy person or ruler"];
  const The_tomb$$$s_entrance_is = ["Yawning open, letting much daylight into the entry chamber", "Behind a huge pair of metal doors INLINE", "Beneath a stone slab", "A simple wooden door framed in stone", "A heavy wooden door framed in stone", "Behind a heavy stone door", "Beneath a gnarled, old tree", "Beneath an obelisk or similar monument", "Beneath a large statue", "Hidden by the terrain INLINE", "Hidden by vegetation INLINE", "Difficult to access INLINE"];
  const Behind_a_huge_pair_of_metal_doors = ["brass", "bronze", "gold", "iron"]; 
  const Hidden_by_the_terrain = ["waterfall", "waterfall", "boulders", "rocky overhang", "rocky overhang", "hillock"]; 
  const Hidden_by_vegetation = ["a briar patch", "a curtain of moss", "enormous tree roots", "overgrown vines"]; 
  const Difficult_to_access = ["up or down a cliff face", "down a deep hole", "up or down a cliff face", "down a deep hole", "in an underwater tunnel", "through an illusory rock or wall"]; 
  const The_tomb$$$s_entrance_is_guarded_by = ["A sworn order of devout warriors", "Sellswords", "Large, frightening statues of beasts INLINE", "Impressive, colossal statues of warriors", "Statues of beautiful maidens, beckoning visitors into a trap", "Several crumbling statues", "Skeletal warriors", "An unsettling arrangement of bones", "A band of outlaws who are carefully delving its secrets", "Nothing; the tomb is rather homey and welcoming"];
  const Large_frightening_statues_of_beasts = ["bats", "bears", "dragons", "eagles", "lions", "ravens", "snakes", "wolves"]; 
  const The_tomb$$$s_grand_crypt_is_located = ["Just beyond a heavy door in the entryway", "Down a steep set of spiraling stairs from the entry chamber", "At the end of a long passageway lined with lesser crypts", "At the end of a long passage lined with statues", "At the end of a long passageway lined with passageways leading to lesser crypts", "Several levels below the entry chamber"];
  const The_tomb$$$s_layout_is = ["Simple; a large grand crypt with a handful of smaller crypts and rooms adjoining", "Simple with a large entry chamber; the entry chamber leads off to smaller crypts and other rooms", "Multi-layered; access to the lower layers is easy to find", "Multi-layered; access to the lower layers is difficult to find", "Multi-winged; access to some wings is difficult to find", "A series of rooms arranged in a concentric fashion; the grand crypt is located among the inner rooms", "Labyrinthine; designed to deliberately confuse intruders", "Simple with an intricate complex hidden beneath the grand crypt"];
  const Many_of_the_interior_walls_are = ["Rough hewn stone", "Smooth cut stone", "Painted or lacquered wood", "Unfinished hardwood", "Decorated with intricate mosaics", "Decorated with elaborate murals", "Decorated with bones and icons of death", "Decorated with sacred texts and runes"];
  const Many_of_the_ceilings_are = ["Uncomfortably close to your head", "Stone, smooth as glass", "Stone, rough and jagged", "Connected to the floor by columns", "Painted or carved with iconic scenes", "Crossed by wooden beams"];
  const The_purpose_of_this_room_is = ["An antechamber to a crypt or chapel", "A chapel dedicated to protecting the souls of the deceased", "A chapel dedicated to aiding the journey of the souls of the deceased", "A grand crypt for a person of importance INLINE", "A false crypt to attract and to trap graverobbers and treasure hunters", "A crypt for immediate family members", "A crypt for previous generations of the family", "A crypt for the spouse of the deceased", "A crypt of unmarked graves", "A reflecting pool or fountain", "A crypt for devoted servants or slaves", "A room dedicated for specific rituals INLINE", "Gallery dedicated to the deceased INLINE", "A guardroom with guards INLINE", "A priest’s robing room", "Storage room for embalming tools", "Storage room for tools and materials to maintain the tomb", "Workshop for embalming the dead", "A crypt hidden by a secret door where the most important person in the tomb rests", "A priest’s quarters or robing room"];
  const A_grand_crypt_for_a_person_of_importance = ["well-known hero", "high priest", "powerful noble", "high priest", "powerful noble", "wealthy merchant"]; 
  const A_room_dedicated_for_specific_rituals = ["divinations", "funerals", "necromancy"]; 
  const Gallery_dedicated_to_the_deceased = ["trophies", "statues", "paintings"]; 
  const A_guardroom_with_guards = ["ghosts", "golems", "knights", "sellswords", "cultists", "skeletons", "wights", "zombies"]; 
  const You_notice = ["A small altar set in an alcove in the wall", "A plaque listing a family lineage", "A plaque noting birth and death dates", "A wall sconce holding several candles", "An empty wall sconce for holding a torch", "A rotten, earthy stench", "A musty, moldy odor", "The scent of decaying flesh", "A mural depicting a mythological scene", "A small fountain or reflecting pool", "A huge book of sacred texts or prayers", "An ornate oil lamp", "A mosaic set into the floor of the room", "A wide fresco or mural depicting a mythological or historical scene", "A gilded sarcophagus", "A simple stone sarcophagus", "A finely-crafted, heavy wooden coffin", "A simple, sturdy wooden coffin", "A stone coffin marked with dates", "An empty coffin"];
  const The_tomb_is_rumored_to = ["Hold tremendous treasure", "Be trapped to guard against intruders", "Hold a legendary weapon or artifact", "Bestow a powerful curse on intruders", "House the remains of someone whose body is widely believed to have been lost", "Have already been cleared of monsters and gold by treasure hunters"];
  const What_haunts_this_tomb = ["A swarm of crawling claws", "A covetous wight", "An ancient demilich", "Malevolent ghosts", "Zombie warriors", "A skeletal hound", "A newly-made vampire", "An ancient vampire", "A huge, animated pile of bones", "Twisted humanoid skeletons", "A zombie made from a fallen adventurer", "A hateful mummy", "Skeletal guardians", "Phantom soldiers", "The ghost of a fair maiden", "Hungry ghouls", "A mad wraith", "A playful ghost", "A treacherous spellcaster-turned-lich", "A vengeful death knight"];
  const What_lives_in_the_tomb_now = ["Ooze", "Carrion crawler", "Otyugh", "Cloaker", "Piercer", "Darkmantle", "Roper", "Fungi", "Stirges", "Mimics", "Umber hulk", "Myconids"];
  const Who_has_entered_the_tomb = ["A devoted priest or priestess", "A traveler or scholar from afar", "A member of the deceased’s family", "A greedy treasure hunter", "A student of necromancy", "A fugitive serial killer"];
  const arrayOfArraysEnum ={This_tomb_was_built_for,The_tomb$$$s_entrance_is,The_tomb$$$s_entrance_is_guarded_by,The_tomb$$$s_grand_crypt_is_located,The_tomb$$$s_layout_is,Many_of_the_interior_walls_are,Many_of_the_ceilings_are,The_purpose_of_this_room_is,You_notice,The_tomb_is_rumored_to,What_haunts_this_tomb,What_lives_in_the_tomb_now,Who_has_entered_the_tomb};
  const arrayOfArrays = [This_tomb_was_built_for,The_tomb$$$s_entrance_is,The_tomb$$$s_entrance_is_guarded_by,The_tomb$$$s_grand_crypt_is_located,The_tomb$$$s_layout_is,Many_of_the_interior_walls_are,Many_of_the_ceilings_are,The_purpose_of_this_room_is,You_notice,The_tomb_is_rumored_to,What_haunts_this_tomb,What_lives_in_the_tomb_now,Who_has_entered_the_tomb];
  const arrayOfInlinesEnum ={Behind_a_huge_pair_of_metal_doors,Hidden_by_the_terrain,Hidden_by_vegetation,Difficult_to_access,Large_frightening_statues_of_beasts,A_grand_crypt_for_a_person_of_importance,A_room_dedicated_for_specific_rituals,Gallery_dedicated_to_the_deceased,A_guardroom_with_guards};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_TradingCompany = function(){
  const This_trading_company$$$s_specific_specialty_or_purpose_is = ["Long-range sea trade, exploration, and transport", "Long-range aerial trade; accomplished with airships, aarakocra messengers, and the occasional roc or dragon", "The hunting and trapping of exotic monsters and animals", "Acting as a puppet agency for a local kingdom manipulating global trade", "Securing and creating long-range caravans, and the slow growth of roads (and maybe even railroads)", "Exploring and exploiting newly discovered lands or planes"];
  const This_trading_company_is_controlled_by = ["A planar being disguised as a wealthy merchant (refer to illicit activities roll for planar source, low is celestial, middle is neutral, high is fiendish)", "A joint council of Masters of Coin from all civilized kingdoms of the world", "A savant goblin who has achieved immortality by divine blessing", "A grizzled ex-adventurer", "A council of investors", "An argumentative mass democracy of all the company's merchants", "A massively wealthy caravan master who found a lost city of gold", "A large and grotesque slave master"];
  const The_merchant_is = ["A member of a trading clan", "A minor lord or lady", "An enterprising trader", "A member of a prominent family", "Of common birth", "A representative of a wealthier merchant"];
  const The_merchant_wears = ["An unpleasant grin", "An unpleasant grin", "An arrogant smirk", "An arrogant smirk", "Too much perfume", "A baggy shirt to cover a fat belly"];
  const The_merchant_seeks_someone_to = ["Obtain a mysterious artifact", "Negotiate a trade contract", "Negotiate a trade contract", "Sabotage a rival merchant", "Sabotage a rival merchant", "Have a good time with"];
  const The_merchant_carries = ["A family heirloom", "Several inventories and invoices", "Some very valuable jewels", "A compromising love letter", "A small knife", "A vial of healing potion, just in case"];
  const Besides_coin_the_merchant_will_trade_in = ["Gems and jewelry", "Gold and silver bullion", "Water, provisions, and other goods", "Shells, beads, and trinkets", "Favors", "Scandalous information"];
  const arrayOfArraysEnum ={This_trading_company$$$s_specific_specialty_or_purpose_is,This_trading_company_is_controlled_by,The_merchant_is,The_merchant_wears,The_merchant_seeks_someone_to,The_merchant_carries,Besides_coin_the_merchant_will_trade_in};
  const arrayOfArrays = [This_trading_company$$$s_specific_specialty_or_purpose_is,This_trading_company_is_controlled_by,The_merchant_is,The_merchant_wears,The_merchant_seeks_someone_to,The_merchant_carries,Besides_coin_the_merchant_will_trade_in];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Treefolk = function(){
  const The_treeperson_is = ["A flowering dryad enchantress", "A soft-spoken dryad protector", "A thorny dryad witch", "A green treant loreseeker", "A sturdy treant guardian", "A withered treant lorekeeper"];
  const The_treeperson_is_looking_to = ["Drive away intruders", "Drive away intruders", "Warn intruders of dangers ahead", "Find a spot where a rare flower grows", "Talk after centuries of silence", "Talk after centuries of silence"];
  const The_treeperson_carries = ["A magic acorn, nut, or other seed", "A magic acorn, nut, or other seed", "A clipping of ancient wood", "A clipping of ancient wood", "A rare moss with healing properties", "A deathly poison mushroom"];
  const arrayOfArraysEnum ={The_treeperson_is,The_treeperson_is_looking_to,The_treeperson_carries};
  const arrayOfArrays = [The_treeperson_is,The_treeperson_is_looking_to,The_treeperson_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_UndeadB = function(){
  const The_beast_was_once = ["A hound", "An ape", "A mare", "A basilisk", "An ox", "A bat", "A panther", "A bear", "A rat", "A boar", "A raven", "A hippogriff"];
  const The_beast_has = ["Gaping holes where its eyes should be", "Lidless, bloodshot eyes", "Loose, grey skin hanging off its bony frame", "Putrid, decaying flesh falling off its bones", "A musty, moldy odor", "An odor of rotting flesh", "An aura of gloom", "An aura of disease"];
  const and = ["Grasping claws or teeth", "A drooling maw", "A long, protruding tongue", "Several broken teeth", "A weeping sore in its side", "Several oozing boils on its back", "Walks with an awkward limp", "Shambles and shuffles when it walks"];
  const The_beast_is_looking_for = ["Something to kill", "Something to eat", "An individual marked by its master", "An opportunity to impress its master", "The location of an evil shrine", "The location of an evil artifact"];
  const arrayOfArraysEnum ={The_beast_was_once,The_beast_has,and,The_beast_is_looking_for};
  const arrayOfArrays = [The_beast_was_once,The_beast_has,and,The_beast_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_UrbanGang = function(){
  const The_gang$$$s_moneymaking_schemes_include = ["Distributing drugs INLINE", "Running heists of and/or fencing stolen gems and precious metals", "Petty theft, burglary, and/or pickpocketing", "Assassinations that look like accidents or that frame someone else", "Running brothels INLINE", "Shaking down legitimate local businesses and/or city officials", "Serving as muscle for shady merchants and/or brothel-keepers", "Holding up incoming or outgoing ships or wagons"];
  const Distributing_drugs = ["smokeleaf", "a hallucinogenic mushroom", "smokeleaf", "a hallucinogenic mushroom", "sleepysalt (a downer)", "sharpsugar (an upper)"]; 
  const Running_brothels = ["exotic", "low", "high-class"]; 
  const The_gang$$$s_colors_are = ["Grey/gunmetal", "Black", "Brown/beaver", "Red/scarlet", "Silver/light grey", "Gold", "Sky blue", "Forest green", "Navy blue", "Royal blue", "Dark brown", "Violet", "Teal/turquoise", "Maroon", "Steel/blue grey", "Bronze", "Orange", "Tan/khaki", "Olive green", "White"];
  const The_gang$$$s_symbol_is = ["An open hand", "A skull", "A clenched fist", "A ghost", "A fish or crab", "The moon", "A snake or lizard", "A star", "A badger or cat", "An arrow", "A spider or bee", "A dagger", "A rat or skunk", "A sword", "A wolf or dog", "A hammer", "A bear or tiger", "A crown", "An eagle or owl", "A goblet"];
  const Gangmembers_often_sport_matching = ["Boots", "Shirts", "Tattoos", "Jackets", "Hats", "Scarves", "Scars", "Vests", "Mustaches", "Bandannas"];
  const The_gang$$$s_leader_is = ["A dangerous megalomaniac", "A charismatic demagogue", "A mysterious foreigner", "A talented thief", "A well-known public figure", "A ruthless killer", "A femme fatale", "A charming rogue", "A dashing swashbuckler", "A brutish thug"];
  const The_boss_is_known_for_his_or_her_involvement_in_an_infamous = ["Assassination", "Gold heist", "Blockade run", "Jewel heist", "Bribery scandal", "Massacre", "Romantic scandal", "Kidnapping"];
  const For_recruitment_the_gang_targets_individuals_who_are = ["Servants/slaves", "Artisans", "Combat veterans", "Thieves", "Laborers", "Sailors", "Relocated peasants", "Drunks", "Young children", "Beggars", "Circus performers", "Foreigners"];
  const Gangmembers_typically_arm_themselves_with = ["Wooden clubs", "Throwing knives", "Over-sized daggers", "Serrated daggers", "Daggers and crossbows", "Hammers and daggers", "Sticks and stones", "Shortswords", "Brass knuckles", "Bare fists"];
  const The_gang$$$s_headquarters_is_hidden_in_or_near = ["The residence of the leader or a senior gangmember", "An artisan's shop or guildhall", "A merchant's office", "A tavern", "A brothel", "A warehouse or shipyard", "A temple complex", "The city's sewers", "The town hall", "An abandoned guildhall or warehouse", "The residence of a wealthy individual or prominent citizen", "A shantytow"];
  const To_access_headquarters_you_must_know = ["A foot soldier", "The password", "A lieutenant", "The passphrase", "The boss", "How to dress"];
  const The_gang_is_feared_or_respected_by = ["Fishermen and sailors", "Beggars and thieves", "Merchants and moneychangers", "Jewelers and gemcutters", "Politicians and magistrates", "Guards and sheriffs", "Soldiers and warriors", "Gladiators and pugilists", "Peasants and farmers", "Servants and slaves", "Priests and sages", "Women and children"];
  const The_gang$$$s_goals_include = ["Domination of the city's politics", "Domination of the city's trade", "Revenge against a rival gang in the same city", "Revenge against a rival gang in another city", "Revenge against the city's elite", "Rebellion against the city's elite"];
  const Gangmembers_typically_fight_with = ["Swarm tactics", "Hit-and-run tactics", "Ambush tactics", "Choreographed maneuvers", "Unpredictable maneuvers", "Lots of smiles and jokes", "Lots of fancy footwork", "Lots of screaming and shouting", "Kicking and stomping", "Lots of head-butting"];
  const arrayOfArraysEnum ={The_gang$$$s_moneymaking_schemes_include,The_gang$$$s_colors_are,The_gang$$$s_symbol_is,Gangmembers_often_sport_matching,The_gang$$$s_leader_is,The_boss_is_known_for_his_or_her_involvement_in_an_infamous,For_recruitment_the_gang_targets_individuals_who_are,Gangmembers_typically_arm_themselves_with,The_gang$$$s_headquarters_is_hidden_in_or_near,To_access_headquarters_you_must_know,The_gang_is_feared_or_respected_by,The_gang$$$s_goals_include,Gangmembers_typically_fight_with};
  const arrayOfArrays = [The_gang$$$s_moneymaking_schemes_include,The_gang$$$s_colors_are,The_gang$$$s_symbol_is,Gangmembers_often_sport_matching,The_gang$$$s_leader_is,The_boss_is_known_for_his_or_her_involvement_in_an_infamous,For_recruitment_the_gang_targets_individuals_who_are,Gangmembers_typically_arm_themselves_with,The_gang$$$s_headquarters_is_hidden_in_or_near,To_access_headquarters_you_must_know,The_gang_is_feared_or_respected_by,The_gang$$$s_goals_include,Gangmembers_typically_fight_with];
  const arrayOfInlinesEnum ={Distributing_drugs,Running_brothels};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_UrbanGangMember = function(){
  const The_gangmember_has = ["A dagger tattoo", "An arrow tattoo", "An anchor tattoo", "A skull tattoo", "A pair of crossed bones tattoo", "A snake tattoo", "A scorpion tattoo", "A spider web tattoo", "A heart tattoo", "A ring of thorns tattoo", "A mermaid tattoo", "A dragon tattoo"];
  const and = ["A nose ring", "Shiny leather boots", "A hole in the toe of one boot", "A dagger in each boot", "A heavy gold chain around the neck", "A wide-brimmed hat", "A funny hat", "A look of indifference", "A maniacal laugh", "A long, hooked nose", "An open shirt and a very hairy chest", "Extravagant mustaches"];
  const The_gangmember_is_looking_for = ["Accomplices for a tricky job", "Revenge against a rival gang", "An easy mark or quick score", "Extra muscle for a tough job", "An opportunity to impress the boss", "A rowdy evening of carousing"];
  const The_gangmember_carries = ["The favor of an admirer", "A wineskin, full of cheap wine", "The key to the gang’s storehouse", "A map of the hidden passages in a local palace, temple, or fortress", "An ornate dagger or shortsword", "A musical instrument", "A long pipe and some smokeleaf", "A crowbar and some rope", "A set of fine lockpicks", "A lantern and a shovel"];
  const The_gangmember_joined_the_gang_to = ["Gain status", "Earn some coin", "Get rich quick", "Impress a lady", "Stay alive", "Impress a parent"];
  const arrayOfArraysEnum ={The_gangmember_has,and,The_gangmember_is_looking_for,The_gangmember_carries,The_gangmember_joined_the_gang_to};
  const arrayOfArrays = [The_gangmember_has,and,The_gangmember_is_looking_for,The_gangmember_carries,The_gangmember_joined_the_gang_to];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Vampire = function(){
  const In_life_the_vampire_was = ["An alchemist or pyromancer", "An assassin or poisonmaker", "A barkeep or barmaid", "A con artist or gambler", "A harlot or madame", "A hunter or woodsman", "A knight or sellsword", "A lord or lady", "A priest or monk", "A sailor or pirate", "A seer or mystic", "A thief or smuggler"];
  const Often_the_vampire_poses_as = ["A powerful noble", "An eccentric scholar", "A mysterious foreigner", "A talented artist", "A polite shopkeeper", "A creepy peddler", "A femme fatale", "A charming rogue", "A friendly barkeep or barmaid", "A charismatic entertainer", "A religious fanatic", "A veteran soldier"];
  const In_addition_to_draining_blood_the_vampire_is_fond_of = ["Shooting prey with an arrow or bolt from range", "Impaling prey", "Gutting or eviscerating prey", "Flaying prey", "Beheading prey", "Strangling prey", "Hanging prey", "Burying prey alive", "Drowning prey", "Throwing prey off a roof", "Severely beating prey", "Dismembering prey"];
  const The_vampire$$$s_goals_include = ["Procreating", "Corrupting and influencing the politics of the city or region", "Domination of the city or region’s politics", "Revenge against a rival vampire", "Revenge against a living person, family, or organization", "Seeking hedonistic pleasure", "Uncovering ancient secrets of death and undeath", "Enslaving the living to create an easy source of food for vampires"];
  const The_vampire$$$s_base_of_operations_is = ["A beautiful manor house", "A run-down castle", "An ancient fortress", "A quaint house on a quiet street", "A tavern", "A brothel", "An unpleasant underground lair", "A crypt in a graveyard", "A crypt beneath a temple", "The vampire is a transient"];
  const The_vampire_prefers_to_hunt = ["Just before sunrise", "Just after sunset", "In the early evening", "Well into the night", "The toll of midnight", "After midnight"];
  const The_vampire$$$s_favorite_prey_are = ["Fishermen and sailors", "Beggars and thieves", "Merchants and moneychangers", "Young noblemen", "Young noblewomen", "Old noblewomen", "Gamblers and drunks", "Priests and monks", "Priestesses", "Serving girls", "Slaves", "Barmaids", "Harlots and madames", "Circus performers", "Foreign travelers", "Farmwives", "Peasant girls", "Inquisitive children", "Young children", "Elves and the fey"];
  const He_or_she_refuses_to_feed_on = ["Ugly women", "Beautiful women", "Pregnant women", "Shy children", "Bold children", "Anyone with blue eyes", "Anyone with green eyes", "Anyone with blonde hair", "Anyone with red hair", "Anyone who is blind, deaf, or lame", "Big burly men", "Dwarves and underground dwellers"];
  const The_vampire_can_shapeshift_to_take_the_form_of = ["A tiny bat", "A swarm of bats", "A cloud of mist", "A swirl of shadows", "A wolf", "A giant bat"];
  const Even_among_vampires_the_vampire_is_quite_good_at = ["Charming humanoids", "Frightening humanoids", "Draining blood quickly", "Sniffing out living creatures", "Traveling overland quickly", "Disguising its true nature", "Negotiations", "Climbing"];
  const The_vampire$$$s_gravedirt_is_from = ["A faraway land", "A local cemetery or temple", "A country village or manor", "A well-known castle or fortress", "A battlefield", "A remote forest or mountain"];
  const The_vampire$$$s_associates_include = ["Less powerful vampires", "Skeletons, zombies, and other undead thralls", "Living thralls on which to feed", "Living thralls who provide pleasurable diversions", "Hundreds of bats", "Rats and maggots", "A pack of vicious wolves", "Members of a death cult", "The local nobility", "The local band of outlaws or assassins’ guild"];
  const Even_among_vampires_the_vampire_is_especially = ["Agile", "Attractive", "Charming", "Cruel", "Domineering", "Intimidating", "Quick", "Sadistic", "Sleazy", "Smooth", "Sneaky", "Witty"];
  const The_vampire_often_wears = ["Shiny leather boots", "A black cape with a hood", "A black cape with a high collar", "A wide-brimmed hat", "A cap pulled low", "A low-cut shirt", "Tight-fitting clothes", "A family signet ring", "An unusual brooch or necklace", "A waxy mustache"];
  const The_vampire_is_unusually_fond_of_or_particular_regarding = ["Horticulture and floral arrangements", "Fashion trends", "Arms and armor maintenance", "Small animals", "Horses", "High quality fabrics and leathers", "Foreign music", "Theater troupes and dancers", "Social status", "Personal hygiene", "Hair styles", "Dental hygiene"];
  const The_vampire_is_particularly_afraid_of_or_takes_special_care_to_avoid = ["Hallowed places", "Densely populated areas", "Sunlight", "Running water", "Sharp wooden objects", "Garlic", "Silver objects", "Relics of the gods"];
  const arrayOfArraysEnum ={In_life_the_vampire_was,Often_the_vampire_poses_as,In_addition_to_draining_blood_the_vampire_is_fond_of,The_vampire$$$s_goals_include,The_vampire$$$s_base_of_operations_is,The_vampire_prefers_to_hunt,The_vampire$$$s_favorite_prey_are,He_or_she_refuses_to_feed_on,The_vampire_can_shapeshift_to_take_the_form_of,Even_among_vampires_the_vampire_is_quite_good_at,The_vampire$$$s_gravedirt_is_from,The_vampire$$$s_associates_include,Even_among_vampires_the_vampire_is_especially,The_vampire_often_wears,The_vampire_is_unusually_fond_of_or_particular_regarding,The_vampire_is_particularly_afraid_of_or_takes_special_care_to_avoid};
  const arrayOfArrays = [In_life_the_vampire_was,Often_the_vampire_poses_as,In_addition_to_draining_blood_the_vampire_is_fond_of,The_vampire$$$s_goals_include,The_vampire$$$s_base_of_operations_is,The_vampire_prefers_to_hunt,The_vampire$$$s_favorite_prey_are,He_or_she_refuses_to_feed_on,The_vampire_can_shapeshift_to_take_the_form_of,Even_among_vampires_the_vampire_is_quite_good_at,The_vampire$$$s_gravedirt_is_from,The_vampire$$$s_associates_include,Even_among_vampires_the_vampire_is_especially,The_vampire_often_wears,The_vampire_is_unusually_fond_of_or_particular_regarding,The_vampire_is_particularly_afraid_of_or_takes_special_care_to_avoid];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_WarmOceanCatch = function(){
  const Nearshore_catch_You_haul_in = ["An anchovy", "A clam", "A crab", "A flounder", "A mackerel", "A mussel", "A scallop", "A sea bass", "A skate", "A rare catch (see below)"];
  const Deepsea_catch_You_haul_in = ["A cuttlefish", "A flounder", "A grouper", "A marlin", "A sardine", "A scallop", "A shrimp", "A snapper", "A tuna", "A rare catch (see below)"];
  const Rare_catch_You_haul_in = ["A piece of junk INLINE", "An abalone", "A barracuda (fights, attacks)", "A lobster", "A monkfish", "An octopus (fights, attacks)", "A reef shark (fights, attacks)", "A swordfish (fights)"];
  const A_piece_of_junk = ["seaweed tangle", "seaweed tangle", "torn net", "torn net", "rotten wood", "old boot"]; 
  const arrayOfArraysEnum ={Nearshore_catch_You_haul_in,Deepsea_catch_You_haul_in,Rare_catch_You_haul_in};
  const arrayOfArrays = [Nearshore_catch_You_haul_in,Deepsea_catch_You_haul_in,Rare_catch_You_haul_in];
  const arrayOfInlinesEnum ={A_piece_of_junk};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Wasteland = function(){
  const You_find = ["A cavern in a canyon wall", "A cave entrance, hidden by a boulder", "A small cave next to a dry river bed", "An entrance to a rocky cave", "A hole under a large boulder", "A large burrow", "A secluded monastery", "A temple ruin", "A village of primitive canyon dwellers", "A peculiar tent", "A stone house sheltered by a canyon, gorge, or bluff", "An abandoned stone house", "Some nomads’ camp", "An abandoned campsite", "A merchant caravan’s camp", "Ruins of an ancient city", "An old watchtower", "An old mine in a canyon", "An active mining camp", "An ancient tomb"];
  const You_see = ["An oasis with a fruit tree", "An oasis with a palm tree and flowers", "An unusually large, prickly desert plant", "A pair of prickly plants from the same root", "A patch of desert flowers in a shady spot", "A patch of damp sand in the shadow of a large boulder", "A rocky bluff", "A boulder shaped like a face", "A pair of identical boulders, side by side", "A boulder sitting atop a larger boulder", "A narrow gorge with a trickle of water", "A wide canyon with a trickle of water", "A dry river bed", "A swiftly flowing, shallow river in a canyon", "A muddy river bed", "A ridge of wind-eroded rock", "A ridge of jagged rock", "A mostly-buried, ancient monument", "Twelve large stones, arranged in a ring", "A sheer rock wall with patterns of color in the rock layers"];
  const You_notice = ["A buzzard circles overhead", "A vulture screams", "A scorpion scuttles away", "A large beetle scuttles away", "A toad hops behind a rock", "A lizard crawls under a rock", "A jackal barks", "A snake slithers away", "A butterfly flutters by", "A rattlesnake sounds", "An unusual bird chirps", "A gentle breeze blows", "The wind blows harder", "The wind kicks up dust", "Small loose stones tumble down a slope", "A hint of moisture on the ground", "A prickly plant with brightly colored fruit", "A strange desert flower", "A small palm tree", "Several small prickly plants"];
  const This_desert_is = ["Boulder-strewn", "Rocky", "Forbidding", "Hilly", "Jagged", "Bleak", "Wind-swept", "Rugged"];
  const Beneath_your_feet_the_soil_is = ["Pale brown", "Cracked", "Muddy brown", "Hard-packed", "Deep red", "Sandy", "Grey", "Stony"];
  const You_come_upon = ["A poisonous snake", "A giant spider", "A giant scorpion", "A giant centipede", "A pack of jackals", "A hungry jackalwere", "A giant lizard", "The ghost of a traveler", "A pair of gnolls", "A pair of bandits", "A hobgoblin scout", "An orkish war band", "A roc on the wing", "A wyvern on the wing", "A strange hermit", "A lost traveler", "A poor nomad", "A suspicious miner", "A barbarian hunter", "A mounted barbarian scout"];
  const You_run_into = ["A rockslide coming down a canyon wall", "A boulder rolling down a canyon wall", "A collapsing sand dune", "Quicksand", "Persistent, strong winds kicking up dust", "A sudden, swirling sandstorm", "A mirage of a city", "A mirage of an oasis"];
  const The_rains_come_to_this_desert = ["Once a year for a few days straight", "On a few days scattered through the year", "During the winter months", "Never; melting snow run-off comes yearly", "Never; the land floods briefly once a year", "Never; this place hasn’t had water in years"];
  const What$$$s_in_the_cave_or_cavern = ["A swarm of beetles", "Lots of bats", "Many spider webs", "A troll's stash", "An ogre's lair", "Some gnolls’ hideout", "Bare rock", "Mummified remains", "Some bandits’ hideout", "A reclusive sorcerer", "Some abandoned mining equipment", "A half-mad prophet"];
  const What$$$s_in_the_hole_or_burrow = ["Centipedes", "A snake", "A toad", "A spider", "A lizard", "Beetles", "A fox", "Scorpions"];
  const Who_built_this_monastery = ["An order of elementalist monks", "An order of mystics", "An order of mystics", "An order of shadow monks", "An order of warrior monks", "An order of warrior monks"];
  const The_temple_was_built_to_honor = ["The moon god", "The sun god", "The god of war", "The god of death", "The storm god", "A forgotten god"];
  const Who_lives_in_the_peculiar_tent = ["A merchant of exotic goods", "A misanthropic shapeshifter", "An eccentric monk", "A nomadic herder", "A nomadic warrior", "An outcast elf"];
  const Who_built_the_stone_house = ["A strange hermit", "A reclusive scholar", "An eccentric healer", "A poor goatherder", "A mining prospector", "A religious fanatic with his many wives"];
  const Who_resides_in_the_stone_house_now = ["An ogre", "Poisonous snakes", "A pair of orcs", "A wild shapeshifter", "Restless ghosts", "A mad fugitive", "An evil witch", "Spiders and rats"];
  const Who_built_the_ancient_ruins = ["A fiendish cult", "An ancient empire", "A dragon cult", "A forgotten king", "An evil queen", "Rich merchants", "A dark sorcerer", "A high elf prince"];
  const Who_lives_in_the_ancient_ruins_now = ["A treasure hunter", "A wasteland druid", "Poisonous snakes", "Cursed mummies", "Restless ghosts", "A hobgoblin warlord", "An orkish war chief", "A tribe of kobolds", "A territorial griffon", "A pair of manticores", "Slavering gnolls", "A dragon"];
  const What_built_the_watchtower = ["An expansive empire", "A nearby kingdom", "Elvish warriors from a past age", "A hobgoblin army", "A legendary dwarf-lord", "A powerful wizard"];
  const Who_holds_the_watchtower_now = ["A band of desperate outlaws", "An order of holy knights", "A clan of orcs", "A hobgoblin war party", "A fiendish presence", "Ghostly warriors"];
  const Who_camped_here = ["A party of orcs", "A hobgoblin raiding party", "Some miners or prospectors", "A pair of wandering elves", "Some refugees or fugitives", "Someone whose purposes are unclear"];
  const Who_is_or_was_mining_here = ["Greedy dwarves", "Ambitious humans", "Tricky goblins", "Industrious kobolds", "A merchant guild", "A royal company"];
  const They_were_mining_for = ["Copper", "Gold", "Iron", "Lead", "Silver", "Tin"];
  const Whose_soul_or_remains_haunt_the_tomb = ["A dark queen", "A heretical priest", "A heretical priest", "A tricky thief", "A vengeful king", "A vengeful king"];
  const arrayOfArraysEnum ={You_find,You_see,You_notice,This_desert_is,Beneath_your_feet_the_soil_is,You_come_upon,You_run_into,The_rains_come_to_this_desert,What$$$s_in_the_cave_or_cavern,What$$$s_in_the_hole_or_burrow,Who_built_this_monastery,The_temple_was_built_to_honor,Who_lives_in_the_peculiar_tent,Who_built_the_stone_house,Who_resides_in_the_stone_house_now,Who_built_the_ancient_ruins,Who_lives_in_the_ancient_ruins_now,What_built_the_watchtower,Who_holds_the_watchtower_now,Who_camped_here,Who_is_or_was_mining_here,They_were_mining_for,Whose_soul_or_remains_haunt_the_tomb};
  const arrayOfArrays = [You_find,You_see,You_notice,This_desert_is,Beneath_your_feet_the_soil_is,You_come_upon,You_run_into,The_rains_come_to_this_desert,What$$$s_in_the_cave_or_cavern,What$$$s_in_the_hole_or_burrow,Who_built_this_monastery,The_temple_was_built_to_honor,Who_lives_in_the_peculiar_tent,Who_built_the_stone_house,Who_resides_in_the_stone_house_now,Who_built_the_ancient_ruins,Who_lives_in_the_ancient_ruins_now,What_built_the_watchtower,Who_holds_the_watchtower_now,Who_camped_here,Who_is_or_was_mining_here,They_were_mining_for,Whose_soul_or_remains_haunt_the_tomb];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_WinterB = function(){
  const The_beast_is = ["A goat", "A bear", "An owl", "A boar", "An owlbear", "A drake", "An ox", "An eagle", "A stag", "An elk", "A wolf", "A fox"];
  const The_beast_has = ["Bright, red eyes", "Squinty, dark eyes", "Dirty white coloration", "Pale grey coloration", "White stripes or markings", "A thick coat of fur or feathers", "An aura of swirling snow", "A frigid aura"];
  const and = ["Exhales an icy spray when it breathes", "Can exhale a spout of freezing wind", "Chills to the bone any who stand close to it", "Leaves a trail of frost in its wake", "Can freeze things with a touch", "Can disappear in a puff of swirling snow", "Explodes into many icy shards if it is slain", "Walks without hindrance atop snow and ice"];
  const The_beast_is_looking_for = ["Something to preserve to eat later", "A lair with an entrance hidden from view", "An individual marked by its master", "An opportunity to impress its master", "The frozen corpse of a long-dead frost titan", "An item that can call blizzards"];
  const arrayOfArraysEnum ={The_beast_is,The_beast_has,and,The_beast_is_looking_for};
  const arrayOfArrays = [The_beast_is,The_beast_has,and,The_beast_is_looking_for];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Witch = function(){
  const The_witch_is = ["A femme fatale", "The wife of a farmer, fisherman, or miner", "The wife of a soldier", "An old seamstress or weaver", "A peasant girl", "A noble woman", "A slave or servant", "An attractive shopkeeper", "A stern barmaid", "An old fortune teller", "A talented dancer or singer", "A heretical priestess", "An herbalist or healer", "A skilled hunter and tracker", "A very young girl", "The daughter of a thief", "The daughter of a sailor", "An old crone", "An old widow", "An attractive young widow"];
  const The_witch_learned_her_craft_from = ["A fellow witch who kidnapped her as a young girl", "A fellow witch who aided her in a time of need", "A neighbor", "Her mother", "Her older sister", "Her grandmother", "Books of forbidden lore", "Communication with the spirits of the dead", "Consorting with a fiend", "Participating in bacchanalian fey orgies"];
  const The_witch_specializes_in = ["Charms", "Clairvoyance", "Communing with the dead", "Conjuring evil spirits", "Curses", "Demonology", "Enchantments", "Herbalism", "Hexes", "Poisons", "Potions", "Prophecies"];
  const For_coin_or_barter_the_witch_will = ["Read your palm", "Gaze into her crystal ball", "Contact a dead relative or friend", "Place a hex on an enemy", "Give you a piece of forbidden magical lore", "Enchant an item", "Curse an item", "Prepare an herbal remedy", "Prepare a potion", "Give you an old family recipe"];
  const The_witch_is_seeking = ["The means to summon a fiend", "The means to control a fiend", "Eternal youth and beauty", "The soul of a specific person", "Vengeance against a powerful person", "A long lost recipe", "Instructions for a powerful ritual", "The wand of a legendary witch or wizard", "The staff of an ancient witch or wizard", "Someone to eat"];
  const The_witch_has_uncovered_dark_secrets_She_cannot_be_killed_by = ["Hanging or strangulation", "Drowning", "Burning", "Disease", "Poisoning", "The blade of a mortal man", "Falling from a great height", "Old age"];
  const The_witch_has = ["A large wart on her nose", "An oversized, crooked nose", "A cute little button nose", "A beauty mark on her cheek", "A hairy mole on her cheek", "A jagged scar on her cheek", "An obnoxious cackling laugh", "A hideous belting laugh", "A nervous twittering laugh", "Long straggly hair", "Long beautiful hair", "Her hair pulled up"];
  const The_witch$$$s_brew_in_the_cauldron_contains = ["Eye of newt", "Toe of frog", "Wool of bat", "Tongue of dog", "Adder's fork", "Blind-worm's sting", "Lizard's leg", "Howlet's wing", "Monkey's paw", "Pint of blood", "Pound of flesh", "Cup of mud", "Beak of duck", "Housecat's tail", "Glob of mold", "Rusty nail", "Garlic bulb", "Cob of corn", "Stirge's foot", "Dryad's thorn"];
  const The_witch_is_brewing = ["A love potion", "A fertility tonic", "A magical cure-all", "A terrible poison", "A component for a summoning ritual", "A component for a necromantic ritual", "A component for a polymorphing hex", "A component for a beguiling charm"];
  const The_witch$$$s_home_is = ["In a cave", "In a swamp", "On an island", "Beneath a large tree in a forest", "In a cottage in the woods", "Hidden in the mountains", "In a quiet village", "Just outside a quiet village", "Down a dark alley in the city", "In the castle or palace of a lord"];
  const The_witch_prefers_to_travel_by = ["Flying broomstick", "Flying mount (giant owl or hippogriff)", "Horseback", "Walking", "Transforming into a beast INLINE", "Teleportation"];
  const Transforming_into_a_beast = ["bat", "cat", "fox", "horse", "owl", "rat", "raven", "wolf"]; 
  const The_witch$$$s_familiar_is = ["An elemental spirit INLINE", "A fey spirit INLINE", "A fiendish spirit INLINE", "An undead creature INLINE", "A bat", "A cat", "An owl", "A snake", "A spider", "A raven", "A rat", "A toad"];
  const An_elemental_spirit = ["air", "earth", "fire", "ice", "mud", "storm", "stone", "water"]; 
  const A_fey_spirit = ["an animated toadstool", "a pixie", "a sprite", "a talking songbird"]; 
  const A_fiendish_spirit = ["a demon trapped in a book", "a devil trapped in a gem", "an imp", "a quasit"]; 
  const An_undead_creature = ["a crawling claw", "a disembodied voice", "an eerie spectral skull", "a flaming skull", "a formless ghost"]; 
  const The_witch$$$s_familiar$$$s_manner_is = ["Calculating", "Clever", "Coy", "Cruel", "Gleeful", "Grumpy", "Insolent", "Shy", "Skittish", "Surly", "Suspicious", "Talkative"];
  const arrayOfArraysEnum ={The_witch_is,The_witch_learned_her_craft_from,The_witch_specializes_in,For_coin_or_barter_the_witch_will,The_witch_is_seeking,The_witch_has_uncovered_dark_secrets_She_cannot_be_killed_by,The_witch_has,The_witch$$$s_brew_in_the_cauldron_contains,The_witch_is_brewing,The_witch$$$s_home_is,The_witch_prefers_to_travel_by,The_witch$$$s_familiar_is,The_witch$$$s_familiar$$$s_manner_is};
  const arrayOfArrays = [The_witch_is,The_witch_learned_her_craft_from,The_witch_specializes_in,For_coin_or_barter_the_witch_will,The_witch_is_seeking,The_witch_has_uncovered_dark_secrets_She_cannot_be_killed_by,The_witch_has,The_witch$$$s_brew_in_the_cauldron_contains,The_witch_is_brewing,The_witch$$$s_home_is,The_witch_prefers_to_travel_by,The_witch$$$s_familiar_is,The_witch$$$s_familiar$$$s_manner_is];
  const arrayOfInlinesEnum ={Transforming_into_a_beast,An_elemental_spirit,A_fey_spirit,A_fiendish_spirit,An_undead_creature};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_WoodElf = function(){
  const The_wood_elf_has = ["Black hair", "Dark brown hair", "Light brown hair", "Auburn hair", "Black hair with a brown streak", "Dark brown hair with an auburn streak", "Brown hair with a blonde streak", "Blonde hair"];
  const framing = ["Brilliant green eyes", "Dark green eyes", "Pale green eyes", "Golden brown eyes", "Dark brown eyes", "Hazel eyes"];
  const above = ["A likable grin", "A delicate laugh", "An amused smirk", "A humorless visage", "A habit of sighing", "A touch of sorrow in his or her voice", "A habit of pacing", "A habit of scratching the back of the neck"];
  const The_wood_elf_is = ["An adept healer", "A devoted priest", "A mystic seer", "A superb archer", "A silent scout", "A watchful ranger", "A fierce warrior", "A masterful bladedancer", "A merry rogue", "An enchanting musician", "A famous beast-slayer", "An exceptional winemaker"];
  const The_wood_elf_is_looking_to = ["Track an unnatural beast or invader", "Lead any travelers away from the forest", "Guard a sacred site from outsiders", "Lead travelers astray in a dangerous part of the forest", "Warn travelers against the dangers of the forest", "Protect the secrets of his or her people at all costs", "Drive an invader out of the forest", "Eat, drink, and be merry"];
  const The_wood_elf_carries = ["An ancient blade", "A unique gem or piece of jewelry", "A finely-crafted spear or staff", "An ornate longbow", "A heavy steel sword", "A simple spear and a simple bow", "A curved blade and a small wooden shield", "Arrows fletched with the feathers of a wild bird INLINE", "Several vials of healing potions", "A cache of useful herbs", "A silver flute", "A carved wooden harp"];
  const Arrows_fletched_with_the_feathers_of_a_wild_bird = ["eagle", "goose", "hawk", "owl", "pheasant", "quail", "raven", "swan"]; 
  const arrayOfArraysEnum ={The_wood_elf_has,framing,above,The_wood_elf_is,The_wood_elf_is_looking_to,The_wood_elf_carries};
  const arrayOfArrays = [The_wood_elf_has,framing,above,The_wood_elf_is,The_wood_elf_is_looking_to,The_wood_elf_carries];
  const arrayOfInlinesEnum ={Arrows_fletched_with_the_feathers_of_a_wild_bird};
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_WoodElf2 = function(){
  const The_wood_elf_is = ["A watchful ranger", "An adept healer", "A fierce warrior", "A watchful ranger", "A fierce warrior", "A silent scout"];
  const The_wood_elf_is_looking_to = ["Track an unnatural beast or invader", "Track an unnatural beast or invader", "Lead any travelers out of the forest", "Guard a sacred site from outsiders", "Eat, drink, and be merry", "Eat, drink, and be merry"];
  const The_wood_elf_carries = ["An ancient blade", "A unique gem or piece of jewelry", "A finely-crafted spear or longsword", "A finely-crafted spear or longsword", "An ornate longbow", "An ornate longbow"];
  const arrayOfArraysEnum ={The_wood_elf_is,The_wood_elf_is_looking_to,The_wood_elf_carries};
  const arrayOfArrays = [The_wood_elf_is,The_wood_elf_is_looking_to,The_wood_elf_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

generate_Woodsman = function(){
  const The_woodsman_is = ["A fugitive from justice", "A strange herbalist", "A skilled hunter", "A desperate poacher", "A poor woodcutter", "A bearded lumberjack"];
  const The_woodsman_is_looking_to = ["Track an unusual beast", "Find the lair of a rare beast", "Find a spot where a rare flower grows", "Find a place where game is plentiful", "Sell some of his wares", "Swap tales and rumors"];
  const The_woodsman_carries = ["A sturdy hatchet", "A bundle of firewood", "A spear or walking staff", "A large knife and a hunting trap", "A finely made longbow", "A trophy or piece of a wild beast"];
  const arrayOfArraysEnum ={The_woodsman_is,The_woodsman_is_looking_to,The_woodsman_carries};
  const arrayOfArrays = [The_woodsman_is,The_woodsman_is_looking_to,The_woodsman_carries];
  let output = "";
  for(let i=0; i<arrayOfArrays.length;i++){
    let roll = arrayOfArrays[i][Math.floor(Math.random()*arrayOfArrays[i].length)];
    if(roll.substring(roll.length-6) === ("INLINE")){
    	roll = roll.substring(0, roll.length-7);
    	roll += " (" + arrayOfInlinesEnum[roll.replaceAll(" ", "_")][Math.floor(Math.random()*arrayOfInlinesEnum[roll.replaceAll(" ", "_")].length)] + ")";
    }
    output += Object.keys(arrayOfArraysEnum)[i].replaceAll("_"," ") + " " + roll + " " + "<br>";
  }
  output = output.replaceAll("$$$", "'");
  const myHeading = document.querySelector("h1");
  myHeading.insertAdjacentHTML("afterend",'<p>'+output+'</p>')
};

