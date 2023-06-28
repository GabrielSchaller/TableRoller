let customString = "";
if (window.location.search != ""){
	customString = window.location.search.substring(1);
}
const myHeading = document.querySelector("#button-track");

const elements = ["GodsPantheon", "CastleInhabitant", "AssassinGuild", "AssassinGuildIndividual", "AssassinGuildIndividualPoison", "Dice", "Beast", "Stats", "Arena", "ArenaGladiator", "Bard","BardSong", "Brothel", "Castle","Cavern","MerchantGuildCaravan","CavernDarkElf", "City", "CraftingGuild","CraftingGuildArtisan"
, "Cult", "CultCultist","DesertDesert","DesertSpooky","DesertWasteland", "Disease","DiseaseHealer", "Druid", "DruidHerblore", "PrisonDungeon","Fiend", "FisherFolk", "FisherFolkBoat","FisherFolkZCold","FisherFolkZWarm"
,"FisherFolkZFresh","Forest", "ForestWoodsman", "ForestZEnchanted", "ForestZEnchantedFaerieFolk", "ForestZEnchantedTreefolk", "ForestZZHauntedForest", "ForestZZHauntedForestGraverobber","ForestZZHauntedForestNecromancer"
,"Jungle", "Hunter","GoblinGangIndividual", "JungleSnakeCultist", "Knight", "Mercenary", "MercenaryIndividual", "MerchantGuild", "MerchantGuildTradingCompany", "MilitaryCamp", "MilitaryCampZEnemy", "Mine","MineMiner", "MineMinerDwarf"
,"MilitaryCampArmorer", "MilitaryCampCommander", "MilitaryCampCook", "MilitaryCampFollower", "MilitaryCampSoldier","Monastry", "MonastryMonk", "NPC", "Mountain","Neighbourhood", "NobleHouse", "NobleHouseIndividual", "OrcClan", "OrcClanIndividual"
,"Outlaws", "OutlawsIndividual", "OutlawsRobber","OutlawsSmuggler","PackLycan", "PackLycanIndividual", "Pickpocket", "PiratesIndividual", "Pirates", "Prison", "PrisonGuard", "PrisonPrisoner", "SavageHorde", "SavageHordeIndividual"
,"MilitaryCampServant", "SerialKiller", "Temple", "TemplePriest", "TheWatchGuard", "TheWatchInvestigator", "TheWatch", "Tomb", "Undead", "UndeadCorporeal", "UndeadIncorporeal", "Vampire","Witch", "BeastCelestial"
, "BeastDemonic", "BeastFire", "BeastInfernal", "BeastLegendary", "BeastSea", "BeastShadow", "BeastWinter"];
const elementsDisplay = {AssassinGuild: "Assassin Guild", CastleInhabitant: "Inhabitants", ArenaGladiator: "Gladiator", PrisonDungeon: "Dungeon", BardSong: "Song", CavernDarkElf: "Drow", CraftingGuild: "Crafting Guild", CraftingGuildArtisan:"Artisan", CultCultist: "Cultist", DesertDesert : "Desert", DesertSpooky: "Spooky"
,DesertWasteland: "Wasteland", DiseaseHealer: "Healer", DruidHerblore: "Herblore", ElfHigh: "Highelf", ElfWood: "Woodelf", ElfDark: "Drow", FisherFolkZCold : "Cold Catch", FisherFolkZWarm: "Warm Catch"
,FisherFolkZFresh : "Freshwater Catch", FisherFolkBoat: "Fishing Boat", ForestWoodsman: "Woodsman", ForestZEnchanted: "Enchanted Forest", ForestZEnchantedFaerieFolk : "Faerie Folk", ForestZEnchantedTreefolk : "Treefolk"
, ForestZZHauntedForest : "Haunted Forest", ForestZZHauntedForestGraverobber : "Graverobber", ForestZZHauntedForestNecromancer : "Necromancer", GoblinGangIndividual : "Goblin Gang Member", JungleSnakeCultist : "Snake Cultist"
, Mercenary: "Mercenary Group", MercenaryIndividual : "Mercenary", MerchantGuild : "Merchant Guild", MerchantGuildTradingCompany : "Trading Company", MerchantGuildCaravan : "Caravan", MilitaryCamp : "Military Camp"
, MilitaryCampZEnemy : "Enemy Camp", MineMiner : "Miner", MineMinerDwarf : "Dwarf", MilitaryCampArmorer : "Armorer", MilitaryCampCommander : "Commander", MilitaryCampCook : "Cook", MilitaryCampFollower : "Camp Follower"
, MilitaryCampSoldier: "Soldier",MonastryMonk: "Monk", NobleHouse : "Noble House", NobleHouseIndividual : "Noble Individual", OrcClan : "Orc Clan", OrcClanIndividual : "Orc Clan Member", OutlawsIndividual : "Outlaw"
, OutlawsSmuggler : "Smuggler", OutlawsRobber : "Robber", PackLycan : "Lycanthropes", PackLycanIndividual : "Pack member", PiratesIndividual : "Crew Member", PrisonGuard : "Guard", PrisonPrisoner : "Prisoner"
, SavageHorde : "Savage Horde", SavageHordeIndividual : "Horde Member", MilitaryCampServant : "Servant", TheWatch : "The Watch", TheWatchGuard : "Guard", TemplePriest : "Priest", TheWatchInvestigator : "Investigator"
, UndeadCorporeal : "Corporeal Undead", UndeadIncorporeal : "Incorporeal Undead", BeastCelestial : "Celestial Beast", BeastDemonic : "Demonic Beast", BeastFire : "Fire Beast", BeastInfernal : "Infernal Beast"
, BeastLegendary : "Legendary Beast", BeastSea : "Sea Beast", BeastShadow: "Shadow Beast", Neighbourhood: "Neighbours", BeastWinter : "Winter Beast", AssassinGuildIndividual : "Assassin", AssassinGuildIndividualPoison: "Poison", GodsPantheon : "Pantheon"};
const base = 62;
if(customString != ""){
	for(i=0;i<customString.length;i+=2){
		const code1 = customString.charCodeAt(customString.length-2-i);
		const code2 = customString.charCodeAt(customString.length-1-i);
		let currentIdentifier = 0;
		if(code1<=57){
			currentIdentifier = (code1-48)*base;
		}else if(code1 <=90){
			currentIdentifier = (code1-55)*base;
		}else{
			currentIdentifier = (code1-61)*base;
		}
		if(code2<=57){
			currentIdentifier += code2-48;
		}else if(code2 <=90){
			currentIdentifier += code2-55;
		}else{
			currentIdentifier += code2-61;
		}
		let toEnter = "<div class=\"container\"   onclick=\"generate_"+elements[code]+"(this.children[1])\">\n      <img class=\"image\" src=\"images/"+elements[code]+".jpg\" draggable=\"false\"/>\n      <div class=\""+ elementsDisplay[elements[code]]+ "\">\n        Dice\n      </div>\n    </div>\n";
    	myHeading.insertAdjacentHTML("afterBegin",toEnter);
		myHeading.insertAdjacentHTML("afterBegin",htmlElements[currentIdentifier]);
	}
}else{
	elements.sort();
	for(i=0;i<elements.length;i++){
		let temp ="";
		if(elements[i] in elementsDisplay){
			temp = elementsDisplay[elements[i]];
		}else{
			temp = elements[i];
		}
		let toEnter = "<div class=\"container\"   onclick=\"generate_"+elements[i]+"(this.children[1])\">\n      <img class=\"image\" src=\"images/"+elements[i]+".jpg\" draggable=\"false\"/>\n      <div class=\"Overlay\">\n        " + temp + "\n      </div>\n    </div>\n";
		myHeading.insertAdjacentHTML("beforeEnd",toEnter);
	}
}