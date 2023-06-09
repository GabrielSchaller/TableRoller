let customString = "";
if (window.location.search != ""){
	customString = window.location.search.substring(1);
}
const myHeading = document.querySelector("#button-track");
const htmlElements = ["<div class=\"container\"   onclick=\"generate_Dice(this.children[1])\">\
      <img class=\"image\" src=\"images/Dice.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Dice\
      </div>\
    </div>\
","<div class=\"container\"   onclick=\"generate_Beast(this.children[1])\">\
      <img class=\"image\" src=\"images/Arena.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Fantastic Beast\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Arena(this.children[1])\">\
      <img class=\"image\" src=\"images/Arena.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Arena\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_ArenaGladiator(this.children[1])\">\
      <img class=\"image\" src=\"images/gladiator.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Gladiator\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Bard(this.children[1])\">\
      <img class=\"image\" src=\"images/Bard.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Bard\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_BardSong(this.children[1])\">\
      <img class=\"image\" src=\"images/song.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Song\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_BeastCelestial(this.children[1])\">\
      <img class=\"image\" src=\"images/celestialB.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        CelestialB\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_BeastDemonic(this.children[1])\">\
      <img class=\"image\" src=\"images/demonicB.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        DemonicB\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_BeastFire(this.children[1])\">\
      <img class=\"image\" src=\"images/fireB.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        FireB\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_BeastInfernal(this.children[1])\">\
      <img class=\"image\" src=\"images/infernalB.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        InfernalB\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_BeastLegendary(this.children[1])\">\
      <img class=\"image\" src=\"images/legendaryB.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        LegendaryB\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_BeastSea(this.children[1])\">\
      <img class=\"image\" src=\"images/seaB.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        SeaB\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_BeastShadow(this.children[1])\">\
      <img class=\"image\" src=\"images/shadowB.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        ShadowB\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_BeastWinter(this.children[1])\">\
      <img class=\"image\" src=\"images/winterB.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        WinterB\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_BeastshifterLycan(this.children[1])\">\
      <img class=\"image\" src=\"images/BeastshifterLycan.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        BeastshifterLycan\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Brothel(this.children[1])\">\
      <img class=\"image\" src=\"images/brothel.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Brothel\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Caravan(this.children[1])\">\
      <img class=\"image\" src=\"images/caravan.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Caravan\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Castle(this.children[1])\">\
      <img class=\"image\" src=\"images/castle.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Castle\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Cavern(this.children[1])\">\
      <img class=\"image\" src=\"images/cavern.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Cavern\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_CavernDarkElf(this.children[1])\">\
      <img class=\"image\" src=\"images/darkElf.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        DarkElf\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_City(this.children[1])\">\
      <img class=\"image\" src=\"images/city.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        City\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_CraftingGuild(this.children[1])\">\
      <img class=\"image\" src=\"images/craftingGuild.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        CraftingGuild\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_CraftingGuildArtisan(this.children[1])\">\
      <img class=\"image\" src=\"images/artisanApprentice.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        ArtisanApprentice\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Cult(this.children[1])\">\
      <img class=\"image\" src=\"images/cult.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Cult\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_CultCultist(this.children[1])\">\
      <img class=\"image\" src=\"images/cultist.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Cultist\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_DesertDesert(this.children[1])\">\
      <img class=\"image\" src=\"images/desert.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Desert\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_DesertSpooky(this.children[1])\">\
      <img class=\"image\" src=\"images/spookyLands.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        SpookyLands\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_DesertWasteland(this.children[1])\">\
      <img class=\"image\" src=\"images/wasteland.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Wasteland\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Disease(this.children[1])\">\
      <img class=\"image\" src=\"images/disease.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Disease\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_DiseaseHealer(this.children[1])\">\
      <img class=\"image\" src=\"images/healer.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Healer\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Druid(this.children[1])\">\
      <img class=\"image\" src=\"images/druid.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Druid\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_DruidHerblore(this.children[1])\">\
      <img class=\"image\" src=\"images/herbLore.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        HerbLore\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Dungeon(this.children[1])\">\
      <img class=\"image\" src=\"images/dungeon.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Dungeon\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_ElfHigh(this.children[1])\">\
      <img class=\"image\" src=\"images/highElf.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        HighElf\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_ElfWood(this.children[1])\">\
      <img class=\"image\" src=\"images/woodElf.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        WoodElf\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_EnemyCamp(this.children[1])\">\
      <img class=\"image\" src=\"images/enemyCamp.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        EnemyCamp\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Fiend(this.children[1])\">\
      <img class=\"image\" src=\"images/fiend.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Fiend\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_FisherCatchCold(this.children[1])\">\
      <img class=\"image\" src=\"images/coldOceanCatch.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        ColdOceanCatch\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_FisherCatchFresh(this.children[1])\">\
      <img class=\"image\" src=\"images/freshWaterCatch.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        FreshWaterCatch\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_FisherCatchWarm(this.children[1])\">\
      <img class=\"image\" src=\"images/warmOceanCatch.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        WarmOceanCatch\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_FisherFolk(this.children[1])\">\
      <img class=\"image\" src=\"images/fisherFolk.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        FisherFolk\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_FisherFolkBoat(this.children[1])\">\
      <img class=\"image\" src=\"images/fishingBoat.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        FishingBoat\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Forest(this.children[1])\">\
      <img class=\"image\" src=\"images/forest.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Forest\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_ForestWoodsman(this.children[1])\">\
      <img class=\"image\" src=\"images/woodsman.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Woodsman\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_ForestZEnchanted(this.children[1])\">\
      <img class=\"image\" src=\"images/enchantedForest.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        EnchantedForest\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_ForestZEnchantedFaerieFolk(this.children[1])\">\
      <img class=\"image\" src=\"images/faerieFolk.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        FaerieFolk\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_ForestZEnchantedTreefolk(this.children[1])\">\
      <img class=\"image\" src=\"images/treefolk.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Treefolk\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_ForestZZHauntedForest(this.children[1])\">\
      <img class=\"image\" src=\"images/hauntedForest.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        HauntedForest\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_ForestZZHauntedForestGraverobber(this.children[1])\">\
      <img class=\"image\" src=\"images/graveRobber.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        GraveRobber\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_ForestZZHauntedForestNecromancer(this.children[1])\">\
      <img class=\"image\" src=\"images/necromancer.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Necromancer\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_GoblinGangIndividual(this.children[1])\">\
      <img class=\"image\" src=\"images/memberGoblinGang.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        MemberGoblinGang\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Hunter(this.children[1])\">\
      <img class=\"image\" src=\"images/hunter.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Hunter\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Jungle(this.children[1])\">\
      <img class=\"image\" src=\"images/jungle.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Jungle\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_JungleSnakeCultist(this.children[1])\">\
      <img class=\"image\" src=\"images/snakeCultist.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        SnakeCultist\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Knight(this.children[1])\">\
      <img class=\"image\" src=\"images/knight.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Knight\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Mercenary(this.children[1])\">\
      <img class=\"image\" src=\"images/mercenaryTroop.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        MercenaryTroop\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_MercenaryIndividual(this.children[1])\">\
      <img class=\"image\" src=\"images/mercenaryIndividual.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        MercenaryIndividual\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_MerchantGuild(this.children[1])\">\
      <img class=\"image\" src=\"images/merchantGuild.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        MerchantGuild\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_MerchantGuildTradingCompany(this.children[1])\">\
      <img class=\"image\" src=\"images/tradingCompany.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        TradingCompany\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_MilitaryCamp(this.children[1])\">\
      <img class=\"image\" src=\"images/militaryCamp.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        MilitaryCamp\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_MilitaryCampArmorer(this.children[1])\">\
      <img class=\"image\" src=\"images/armorer.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Armorer\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_MilitaryCampCommander(this.children[1])\">\
      <img class=\"image\" src=\"images/commanderCamp.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        CommanderCamp\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_MilitaryCampCook(this.children[1])\">\
      <img class=\"image\" src=\"images/cookCamp.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        CookCamp\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_MilitaryCampFollower(this.children[1])\">\
      <img class=\"image\" src=\"images/campFollower.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        CampFollower\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_MilitaryCampSoldier(this.children[1])\">\
      <img class=\"image\" src=\"images/soldierCampIndividual.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        SoldierCampIndividual\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Mine(this.children[1])\">\
      <img class=\"image\" src=\"images/mine.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Mine\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_MineMiner(this.children[1])\">\
      <img class=\"image\" src=\"images/minerMine.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        MinerMine\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_MineMinerDwarf(this.children[1])\">\
      <img class=\"image\" src=\"images/dwarfMine.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        DwarfMine\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Monastry(this.children[1])\">\
      <img class=\"image\" src=\"images/monastry.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Monastry\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_MonastryMonk(this.children[1])\">\
      <img class=\"image\" src=\"images/monkIndividual.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        MonkIndividual\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Mountain(this.children[1])\">\
      <img class=\"image\" src=\"images/mountain.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Mountain\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_NPC(this.children[1])\">\
      <img class=\"image\" src=\"images/nPC.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        NPC\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Neighbourhood(this.children[1])\">\
      <img class=\"image\" src=\"images/neighbourhood.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Neighbourhood\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_NobleHouse(this.children[1])\">\
      <img class=\"image\" src=\"images/nobleHouse.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        NobleHouse\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_NobleHouseIndividual(this.children[1])\">\
      <img class=\"image\" src=\"images/nobleIndividual.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        NobleIndividual\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_OrcClan(this.children[1])\">\
      <img class=\"image\" src=\"images/orcClan.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        OrcClan\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_OrcClanIndividual(this.children[1])\">\
      <img class=\"image\" src=\"images/orcIndividual.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        OrcIndividual\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Outlaws(this.children[1])\">\
      <img class=\"image\" src=\"images/outlaws.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Outlaws\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_OutlawsIndividual(this.children[1])\">\
      <img class=\"image\" src=\"images/outlawIindividual.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        OutlawIindividual\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_OutlawsRobber(this.children[1])\">\
      <img class=\"image\" src=\"images/robberOutlaws.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        RobberOutlaws\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_OutlawsSmuggler(this.children[1])\">\
      <img class=\"image\" src=\"images/smugglerOutlaws.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        SmugglerOutlaws\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_PackLycan(this.children[1])\">\
      <img class=\"image\" src=\"images/packLycan.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        PackLycan\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_PackLycanIndividual(this.children[1])\">\
      <img class=\"image\" src=\"images/lycanthrope.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Lycanthrope\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Pickpocket(this.children[1])\">\
      <img class=\"image\" src=\"images/pickpocket.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Pickpocket\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_PiratesIndividual(this.children[1])\">\
      <img class=\"image\" src=\"images/pirateIndividual.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        PirateIndividual\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Prison(this.children[1])\">\
      <img class=\"image\" src=\"images/prison.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Prison\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_PrisonGuard(this.children[1])\">\
      <img class=\"image\" src=\"images/prisonGuard.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        PrisonGuard\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_PrisonPrisoner(this.children[1])\">\
      <img class=\"image\" src=\"images/prisonerPrison.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        PrisonerPrison\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_SavageHorde(this.children[1])\">\
      <img class=\"image\" src=\"images/savageHorde.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        SavageHorde\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_SavageHordeIndividual(this.children[1])\">\
      <img class=\"image\" src=\"images/savageIndividual.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        SavageIndividual\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_SerialKiller(this.children[1])\">\
      <img class=\"image\" src=\"images/serialKiller.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        SerialKiller\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_ServantCamp(this.children[1])\">\
      <img class=\"image\" src=\"images/servantCamp.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        ServantCamp\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Temple(this.children[1])\">\
      <img class=\"image\" src=\"images/temple.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Temple\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_TemplePriest(this.children[1])\">\
      <img class=\"image\" src=\"images/priestTemple.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        PriestTemple\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_TheWatchGuard(this.children[1])\">\
      <img class=\"image\" src=\"images/theWatchGuard.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        TheWatchGuard\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_TheWatchInvestigator(this.children[1])\">\
      <img class=\"image\" src=\"images/theWatchInvestigator.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        TheWatchInvestigator\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Tomb(this.children[1])\">\
      <img class=\"image\" src=\"images/tomb.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Tomb\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Undead(this.children[1])\">\
      <img class=\"image\" src=\"images/restlessUndead.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        RestlessUndead\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_UndeadCorporeal(this.children[1])\">\
      <img class=\"image\" src=\"images/corporealUndead.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        CorporealUndead\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_UndeadIncorporeal(this.children[1])\">\
      <img class=\"image\" src=\"images/incorporealUndead.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        IncorporealUndead\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Vampire(this.children[1])\">\
      <img class=\"image\" src=\"images/vampire.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Vampire\
      </div>\
    </div>\
","    <div class=\"container\"   onclick=\"generate_Witch(this.children[1])\">\
      <img class=\"image\" src=\"images/witch.jpg\" draggable=\"false\"/>\
      <div class=\"Overlay\">\
        Witch\
      </div>\
    </div>\
"];

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
		myHeading.insertAdjacentHTML("afterBegin",htmlElements[currentIdentifier]);
	}
}else{
	for(i=0;i<htmlElements.length;i++){
		myHeading.insertAdjacentHTML("beforeEnd",htmlElements[i]);
	}
}