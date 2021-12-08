<template>
  <div class="container">
    <div class="navSocial">
      <NewNavSocial />
    </div>
    <div class="navButton">
      <NewNavButton />
    </div>
    <div class="LaLigaComponent">
      <BackgroundTemplate>
        <template #header>
          LA LIGA
        </template>
        <template #displayArea>
          <div class="LigueTable">
            <div class="contentTable">
              <div class="contentTable__matchDayTable">
                <MatchDayTable class="ligue">
                  <template #header> Matchday</template>
                  <template #date>
                    <p
                      class="ligue__items"
                      v-for="(item, index) in LaLigaMatchDay.slice(0, 10)"
                      :key="index"
                    >
                      <LazyLaLigaMatchDay :date="item" />
                    </p>
                  </template>
                  <template #teamName>
                    <p
                      class="ligue__items"
                      v-for="(item, index) in LaLigaMatchDay.slice(0, 10)"
                      :key="index"
                    >
                      <LazyLaLigaMatchDay :teamName="item" />
                    </p>
                  </template>
                  <template #teamLogo>
                    <p
                      class="ligue__items__logoOne"
                      v-for="(item, index) in LaLigaMatchDay.slice(0, 10)"
                      :key="index"
                    >
                      <LazyLaLigaMatchDay :teamLogo="item" />
                    </p>
                  </template>
                  <template #result>
                    <p
                      class="ligue__items"
                      v-for="(item, index) in LaLigaMatchDay.slice(0, 10)"
                      :key="index"
                    >
                      <LazyLaLigaMatchDay :result="item" />
                    </p>
                  </template>
                  <template #teamLogo2>
                    <p
                      class="ligue__items__logoOne"
                      v-for="(item, index) in LaLigaMatchDay.slice(0, 10)"
                      :key="index"
                    >
                      <LazyLaLigaMatchDay :teamLogo2="item" />
                    </p>
                  </template>
                  <template #teamName2>
                    <p
                      class="ligue__items"
                      v-for="(item, index) in LaLigaMatchDay.slice(0, 10)"
                      :key="index"
                    >
                      <LazyLaLigaMatchDay :teamName2="item" />
                    </p>
                  </template>
                </MatchDayTable>
              </div>
              <div class="contentTable__ligueTable">
                <LigueTable class="ligue">
                  <template #header>
                    La Liga
                  </template>
                  <template #club>
                    <span class="ligue__item__name">Club</span>
                  </template>
                  <template #Playername>
                    <span class="ligue__item__matches">Matches</span>
                  </template>
                  <template #year>
                    <span class="ligue__item__pts">Pts</span></template
                  >
                  <template #name>
                    <p
                      v-for="(item, index) in laLigaTableArray.slice(0, 10)"
                      :key="index"
                    >
                      <LazyLaligaTable2 :name="item" />
                    </p>
                  </template>
                  <template #index>
                    <p
                      v-for="(item, index) in laLigaTableArray.slice(0, 10)"
                      :key="index"
                    >
                      <LazyLaligaTable2 :index="index + 1" />
                    </p>
                  </template>
                  <template #logo>
                    <p
                      v-for="(item, index) in laLigaTableArray.slice(0, 10)"
                      :key="index"
                    >
                      <LazyLaligaTable2 :logo="item" />
                    </p>
                  </template>
                  <template #matches>
                    <p
                      v-for="(item, index) in laLigaTableArray.slice(0, 10)"
                      :key="index"
                    >
                      <LazyLaligaTable2 :matches="item" />
                    </p>
                  </template>
                  <template #pts>
                    <p
                      v-for="(item, index) in laLigaTableArray.slice(0, 10)"
                      :key="index"
                    >
                      <LazyLaligaTable2 :pts="item" />
                    </p>
                  </template>
                </LigueTable>
              </div>
            </div>
          </div>
        </template>
      </BackgroundTemplate>
    </div>
    <div class="carusel">
      <BackgroundTemplate>
        <template #header>
          SPOTLIGHT
        </template>
        <template #displayArea>
          <div class="carusel__content">
            <CaruseleApp>
              <template #title>
                <router-link
                  v-for="(item, index) in newsCaruselHeader.slice(num1, num2)"
                  :key="index"
                  :to="{ name: 'DetailsCaruselNews', params: { id: num1 } }"
                >
                  <LazyCaruselTitle :item="item" />
                </router-link>
              </template>
              <template #imageCharacter>
                <p
                  v-for="(item, index) in newsCarusel.slice(num1, num2)"
                  :key="index"
                >
                  <LazyCarusel :item="item" :classProps="classProps" />
                </p>
              </template>
              <template #button1>
                <div class="carusel__content__btn1">
                  <CaruselButton>
                    <template #icon>
                      <span @click="prev"
                        ><i class="fas fa-chevron-left"></i
                      ></span>
                    </template>
                  </CaruselButton>
                </div>
              </template>
              <template #button2>
                <div class="carusel__content__btn2">
                  <CaruselButton>
                    <template #icon>
                      <span @click="next"
                        ><i class="fas fa-chevron-right"></i
                      ></span>
                    </template>
                  </CaruselButton>
                </div>
              </template>
            </CaruseleApp>
          </div>
        </template>
      </BackgroundTemplate>
    </div>
    <CaruselButton />
    <div class="transfersComponents">
      <BackgroundTemplate>
        <template #header>
          FIFA RANKINGS
        </template>
        <template #displayArea>
          <div class="table">
            <div class="table__one">
              <LigueTable>
                <template #header>Best Fifa Players </template>
                <template #club>Player</template>
                <template #Playername>Name</template>
                <template #MarketValue>Market Value</template>
                <template #year>Year</template>
                <template #index>
                  <p
                    v-for="(item, index) in bestPlayersFifa.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestFifaPlayer :index="index + 1" />
                  </p>
                </template>
                <template #logo>
                  <p
                    v-for="(item, index) in bestPlayersFifa.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestFifaPlayer :imageLogo="item" />
                  </p>
                </template>
                <template #name>
                  <p
                    v-for="(item, index) in bestPlayersFifa.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestFifaPlayer :playerName="item" />
                  </p>
                </template>
                <template #matches>
                  <p
                    class="table__one__value"
                    v-for="(item, index) in bestPlayersFifa.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestFifaPlayer :marketValueAtThisTime="item" />
                    <LazyBestFifaPlayer :marketValueAtThisTimeCurrency="item" />
                  </p>
                </template>

                <template #pts>
                  <p
                    v-for="(item, index) in bestPlayersFifa.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestFifaPlayer :year="item" v />
                  </p>
                </template>
              </LigueTable>
            </div>
            <div class="table__two">
              <LigueTable>
                <template #name>
                  <p
                    v-for="(item, index) in bestTeamsFifa.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestNationalTeams :item="item" />
                  </p>
                </template>
                <template #logo>
                  <p
                    v-for="(item, index) in bestTeamsFifa.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestNationalTeams :ImageLogo="item" />
                  </p>
                </template>
                <template #index>
                  <p
                    v-for="(item, index) in bestTeamsFifa.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestNationalTeams :rank="item" />
                  </p>
                </template>
                <template #matches>
                  <p
                    v-for="(item, index) in bestTeamsFifa.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestNationalTeams :confederation="item" />
                  </p>
                </template>
                <template #pts>
                  <p
                    v-for="(item, index) in bestTeamsFifa.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestNationalTeams :totalPoint="item" />
                  </p>
                </template>
                <template #club>Team</template>
                <template #MarketValue>Federation</template>
                <template #year>Points</template>
                <template #Playername>Country</template>
                <template #header>Fifa World Best Teams</template>
              </LigueTable>
            </div>
            <div class="table__three">
              <LigueTable>
                <template #club>Country</template>
                <template #MarketValue>Market Value</template>
                <template #Playername>League</template>
                <template #header>Most Valuable Competitions </template>
                <template #name>
                  <p
                    v-for="(item, index) in bestleagues.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestLeagues :item="item" />
                  </p>
                </template>
                <template #index>
                  <p
                    v-for="(item, index) in bestleagues.slice(0, 10)"
                    :key="index"
                  >
                    <span>{{ index + 1 }}</span>
                  </p>
                </template>
                <template #logo>
                  <p
                    v-for="(item, index) in bestleagues.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestLeagues :ImageLogo="item" />
                  </p>
                </template>
                <template #matches>
                  <p
                    v-for="(item, index) in bestleagues.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestLeagues :marketValue="item" />
                  </p>
                </template>
                <template #pts>
                  <p
                    v-for="(item, index) in bestleagues.slice(0, 10)"
                    :key="index"
                  >
                    <LazyBestLeagues :marketValueNumeral="item" />
                  </p>
                </template>
              </LigueTable>
            </div>
          </div>
        </template>
      </BackgroundTemplate>
    </div>
    <div class="newsTickers">
      <BackgroundTemplate>
        <template #header>
          NEWS TICKER
        </template>
        <template #displayArea>
          <div class="newsTickers__content">
            <div class="newsTickers__content__one">
              <NewsTicker>
                <template #header>
                  <p v-for="(item, index) in newsTickers" :key="index">
                    <LazyTicker :header="item" v-if="index <= 0" />
                  </p>
                </template>
                <template #image>
                  <p v-for="(item, index) in newsTickers" :key="index">
                    <LazyTicker :playerImage="item" v-if="index <= 0" />
                  </p>
                </template>
                <template #headerTitle>
                  <p v-for="(item, index) in newsTickers" :key="index">
                    <LazyTicker :headerTitle="item" v-if="index <= 0" />
                  </p>
                </template>
                <template #logoImage> </template>
                <template #contentTitle>
                  <p v-for="(item, index) in newsTickers" :key="index">
                    <LazyTicker :contentTitle="item" v-if="index <= 0" />
                  </p>
                </template>
              </NewsTicker>
            </div>
            <div class="newsTickers__content__two">
              <NewsTicker>
                <template #header>
                  <p
                    v-for="(item, index) in newsTickers.slice(1, 2)"
                    :key="index"
                  >
                    <LazyTicker :header="item" />
                  </p>
                </template>
                <template #image>
                  <p
                    v-for="(item, index) in newsTickers.slice(1, 2)"
                    :key="index"
                  >
                    <LazyTicker :playerImage="item" />
                  </p>
                </template>
                <template #headerTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(1, 2)"
                    :key="index"
                  >
                    <LazyTicker :headerTitle="item" />
                  </p>
                </template>
                <template #logoImage> </template>
                <template #contentTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(1, 2)"
                    :key="index"
                  >
                    <LazyTicker :contentTitle="item" />
                  </p>
                </template>
              </NewsTicker>
            </div>
            <div class="newsTickers__content__tree">
              <NewsTicker>
                <template #header>
                  <p
                    v-for="(item, index) in newsTickers.slice(2, 3)"
                    :key="index"
                  >
                    <LazyTicker :header="item" />
                  </p>
                </template>
                <template #image>
                  <p
                    v-for="(item, index) in newsTickers.slice(2, 3)"
                    :key="index"
                  >
                    <LazyTicker :playerImage="item" />
                  </p>
                </template>
                <template #headerTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(2, 3)"
                    :key="index"
                  >
                    <LazyTicker :headerTitle="item" />
                  </p>
                </template>
                <template #logoImage> </template>
                <template #contentTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(2, 3)"
                    :key="index"
                  >
                    <LazyTicker :contentTitle="item" />
                  </p>
                </template>
              </NewsTicker>
            </div>
            <div class="newsTickers__content__four">
              <NewsTicker>
                <template #header>
                  <p
                    v-for="(item, index) in newsTickers.slice(3, 4)"
                    :key="index"
                  >
                    <LazyTicker :header="item" />
                  </p>
                </template>
                <template #image>
                  <p
                    v-for="(item, index) in newsTickers.slice(3, 4)"
                    :key="index"
                  >
                    <LazyTicker :playerImage="item" />
                  </p>
                </template>
                <template #headerTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(3, 4)"
                    :key="index"
                  >
                    <LazyTicker :headerTitle="item" />
                  </p>
                </template>
                <template #logoImage> </template>
                <template #contentTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(3, 4)"
                    :key="index"
                  >
                    <LazyTicker :contentTitle="item" />
                  </p>
                </template>
              </NewsTicker>
            </div>
            <div class="newsTickers__content__five">
              <NewsTicker>
                <template #header>
                  <p
                    v-for="(item, index) in newsTickers.slice(4, 5)"
                    :key="index"
                  >
                    <LazyTicker :header="item" />
                  </p>
                </template>
                <template #image>
                  <p
                    v-for="(item, index) in newsTickers.slice(4, 5)"
                    :key="index"
                  >
                    <LazyTicker :playerImage="item" />
                  </p>
                </template>
                <template #headerTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(4, 5)"
                    :key="index"
                  >
                    <LazyTicker :headerTitle="item" />
                  </p>
                </template>
                <template #logoImage> </template>
                <template #contentTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(4, 5)"
                    :key="index"
                  >
                    <LazyTicker :contentTitle="item" />
                  </p>
                </template>
              </NewsTicker>
            </div>
            <div class="newsTickers__content__six">
              <NewsTicker>
                <template #header>
                  <p
                    v-for="(item, index) in newsTickers.slice(5, 6)"
                    :key="index"
                  >
                    <LazyTicker :header="item" />
                  </p>
                </template>
                <template #image>
                  <p
                    v-for="(item, index) in newsTickers.slice(5, 6)"
                    :key="index"
                  >
                    <LazyTicker :playerImage="item" />
                  </p>
                </template>
                <template #headerTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(5, 6)"
                    :key="index"
                  >
                    <LazyTicker :headerTitle="item" />
                  </p>
                </template>
                <template #logoImage> </template>
                <template #contentTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(5, 6)"
                    :key="index"
                  >
                    <LazyTicker :contentTitle="item" />
                  </p>
                </template>
              </NewsTicker>
            </div>
            <div class="newsTickers__content__seven">
              <NewsTicker>
                <template #header>
                  <p
                    v-for="(item, index) in newsTickers.slice(6, 7)"
                    :key="index"
                  >
                    <LazyTicker :header="item" />
                  </p>
                </template>
                <template #image>
                  <p
                    v-for="(item, index) in newsTickers.slice(6, 7)"
                    :key="index"
                  >
                    <LazyTicker :playerImage="item" />
                  </p>
                </template>
                <template #headerTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(6, 7)"
                    :key="index"
                  >
                    <LazyTicker :headerTitle="item" />
                  </p>
                </template>
                <template #logoImage> </template>
                <template #contentTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(6, 7)"
                    :key="index"
                  >
                    <LazyTicker :contentTitle="item" />
                  </p>
                </template>
              </NewsTicker>
            </div>
            <div class="newsTickers__content__eight">
              <NewsTicker>
                <template #header>
                  <p
                    v-for="(item, index) in newsTickers.slice(7, 8)"
                    :key="index"
                  >
                    <LazyTicker :header="item" />
                  </p>
                </template>
                <template #image>
                  <p
                    v-for="(item, index) in newsTickers.slice(7, 8)"
                    :key="index"
                  >
                    <LazyTicker :playerImage="item" />
                  </p>
                </template>
                <template #headerTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(7, 8)"
                    :key="index"
                  >
                    <LazyTicker :headerTitle="item" />
                  </p>
                </template>
                <template #logoImage> </template>
                <template #contentTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(7, 8)"
                    :key="index"
                  >
                    <LazyTicker :contentTitle="item" />
                  </p>
                </template>
              </NewsTicker>
            </div>
            <div class="newsTickers__content__nine">
              <NewsTicker>
                <template #header>
                  <p
                    v-for="(item, index) in newsTickers.slice(8, 9)"
                    :key="index"
                  >
                    <LazyTicker :header="item" />
                  </p>
                </template>
                <template #image>
                  <p
                    v-for="(item, index) in newsTickers.slice(8, 9)"
                    :key="index"
                  >
                    <LazyTicker :playerImage="item" />
                  </p>
                </template>
                <template #headerTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(8, 9)"
                    :key="index"
                  >
                    <LazyTicker :headerTitle="item" />
                  </p>
                </template>
                <template #logoImage> </template>
                <template #contentTitle>
                  <p
                    v-for="(item, index) in newsTickers.slice(8, 9)"
                    :key="index"
                  >
                    <LazyTicker :contentTitle="item" />
                  </p>
                </template>
              </NewsTicker>
            </div>
          </div>
        </template>
      </BackgroundTemplate>
    </div>
    <div class="PremierLigue">
      <BackgroundTemplate>
        <template #header>
          PREMIER LEAGUE
        </template>
        <template #displayArea>
          <div class="LigueTable">
            <div class="contentTable">
              <div class="contentTable__matchDayTable">
                <MatchDayTable class="ligue">
                  <template #header>
                    Matchday
                  </template>
                  <template #date>
                    <p
                      class="ligue__items"
                      v-for="(item, index) in premierLeagueGamePlan"
                      :key="index"
                    >
                      <LazyPremierLeagueMatchDay :data="item" />
                    </p>
                  </template>
                  <template #teamName>
                    <p
                      class="ligue__items"
                      v-for="(item, index) in premierLeagueGamePlan"
                      :key="index"
                    >
                      <LazyPremierLeagueMatchDay :item="item" />
                    </p>
                  </template>
                  <template #teamLogo>
                    <p
                      class="ligue__items__logoOne"
                      v-for="(item, index) in premierLeagueGamePlan"
                      :key="index"
                    >
                      <LazyPremierLeagueMatchDay :teamLogo="item" />
                    </p>
                  </template>
                  <template #result>
                    <p
                      class="ligue__items"
                      v-for="(item, index) in premierLeagueGamePlan"
                      :key="index"
                    >
                      <LazyPremierLeagueMatchDay :result="item" />
                    </p>
                  </template>
                  <template #teamLogo2>
                    <p
                      class="ligue__items__logoOne"
                      v-for="(item, index) in premierLeagueGamePlan"
                      :key="index"
                    >
                      <LazyPremierLeagueMatchDay :teamLogo2="item" />
                    </p>
                  </template>
                  <template #teamName2>
                    <p
                      class="ligue__items"
                      v-for="(item, index) in premierLeagueGamePlan"
                      :key="index"
                    >
                      <LazyPremierLeagueMatchDay :teamName2="item" />
                    </p>
                  </template>
                </MatchDayTable>
              </div>
              <div class="contentTable__ligueTable">
                <LigueTable class="ligue">
                  <template #header>
                    Premier League
                  </template>
                  <template #name>
                    <p
                      class="ligue__item"
                      v-for="(item, index) in premierLeagueTable.slice(0, 10)"
                      :key="index"
                    >
                      <LazyPremierLeague :name="item" />
                    </p>
                  </template>
                  <template #index>
                    <p
                      class="ligue__item"
                      v-for="(item, index) in premierLeagueTable.slice(0, 10)"
                      :key="index"
                    >
                      <LazyPremierLeague :index="index + 1" />
                    </p>
                  </template>
                  <template #logo>
                    <p
                      class="ligue__item"
                      v-for="(item, index) in premierLeagueTable.slice(0, 10)"
                      :key="index"
                    >
                      <LazyPremierLeague :logo="item" />
                    </p>
                  </template>
                  <template #matches>
                    <p
                      class="ligue__item"
                      v-for="(item, index) in premierLeagueTable.slice(0, 10)"
                      :key="index"
                    >
                      <LazyPremierLeague :matches="item" />
                    </p>
                  </template>
                  <template #pts>
                    <p
                      class="ligue__item"
                      v-for="(item, index) in premierLeagueTable.slice(0, 10)"
                      :key="index"
                    >
                      <LazyPremierLeague :pts="item" />
                    </p>
                  </template>
                  <template #club>
                    <span class="ligue__item__name">Club</span>
                  </template>
                  <template #Playername>
                    <span class="ligue__item__matches">Matches</span>
                  </template>
                  <template #year>
                    <span class="ligue__item__pts">Pts</span></template
                  >
                </LigueTable>
              </div>
            </div>
          </div>
        </template>
      </BackgroundTemplate>
    </div>
    <div class="deals">
      <BackgroundTemplate>
        <template #header>
          TRANSFERS RUMORS
        </template>
        <template #displayArea>
          <div class="container">
            <div class="table">
              <div class="table__one">
                <TransfersNews>
                  <template #header>Premier League</template>
                  <template #logo>
                    <p v-for="(item, index) in newsTransfersImage" :key="index">
                      <LazyBingTransfers :image="item" v-if="index <= 6" />
                    </p>
                  </template>
                  <template #text>
                    <router-link
                      v-for="(item, index) in newsTransfers"
                      :key="index"
                      :to="{
                        name: 'DetailsPremierLeagueTransfers',
                        params: { id: index },
                      }"
                    >
                      <LazyBingTransfers :item="item" v-if="index <= 6" />
                    </router-link>
                  </template>
                </TransfersNews>
              </div>
              <div class="table__two">
                <TransfersNews>
                  <template #header>La Liga</template>
                  <template #logo>
                    <p
                      v-for="(item, index) in laLigaTransfersNewsImage"
                      :key="index"
                    >
                      <LazyLaLigaTransfersBing
                        :image="item"
                        v-if="index <= 6"
                      />
                    </p>
                  </template>
                  <template #text>
                    <router-link
                      v-for="(item, index) in laLigaTransfersNews"
                      :key="index"
                      :to="{
                        name: 'DetailsLaLigaTransfersRumors',
                        params: { id: index },
                      }"
                    >
                      <LazyLaLigaTransfersBing :item="item" v-if="index <= 6" />
                    </router-link>
                  </template>
                </TransfersNews>
              </div>
            </div>
          </div>
        </template>
      </BackgroundTemplate>
    </div>
    <div class="footer">
      <NewFooter />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted, watch, ref } from "vue";
import NewFooter from "../components/NewFooter.vue";
import NewNavSocial from "./NewNavSocial.vue";
import NewNavButton from "../components/NewNavButton.vue";
import BackgroundTemplate from "../components/BackgroundTemplate.vue";
import CaruseleApp from "../components/Carusele/CaruseleApp.vue";
import LigueTable from "../components/LigueTable.vue";
import MatchDayTable from "../components/MatchDayTable.vue";
import NewsTicker from "../components/NewsTicker.vue";
import TransfersNews from "../components/TransfersNews.vue";
import CaruselButton from "../components/Carusele/CaruselButton.vue";
import LazyBestNationalTeams from "../components/LazyBestNationalTeams.vue";
import LazyBestLeagues from "../components/LazyBestLeagues.vue";
import LazyBestFifaPlayer from "../components/LazyBestFifaPlayers.vue";
import LazyTicker from "../components/LazyTicker.vue";
import LazyPremierLeague from "../components/LazyPremierLeague.vue";
import LazyBingTransfers from "../components/LazyBingTransfers.vue";
import LazyLaLigaTransfersBing from "../components/LazyLaLigaTransfersBing.vue";
import LazyCarusel from "../components/LazyCarusel.vue";
import LazyCaruselTitle from "../components/LazyCaruselTitle.vue";
import LazyLaLigaMatchDay from "../components/LazyLaLigaMatchDay.vue";
import LazyLaligaTable2 from "../components/LazyLaligaTable2.vue";
import LazyPremierLeagueMatchDay from "../components/LazyPremierLeagueMatchDay.vue";

export default {
  name: "HelloWorld",

  components: {
    NewFooter,
    NewNavSocial,
    NewNavButton,
    BackgroundTemplate,
    CaruseleApp,
    LigueTable,
    MatchDayTable,
    NewsTicker,
    TransfersNews,
    CaruselButton,
    LazyBestNationalTeams,
    LazyBestLeagues,
    LazyBestFifaPlayer,
    LazyTicker,
    LazyPremierLeagueMatchDay,
    LazyPremierLeague,
    LazyBingTransfers,
    LazyLaLigaTransfersBing,
    LazyCarusel,
    LazyCaruselTitle,
    LazyLaLigaMatchDay,
    LazyLaligaTable2,
  },

  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("LaLigaTable");
      store.dispatch("LaLigaMatchDays");
      store.dispatch("newsCarusel");
      store.dispatch("bestPlayers");
      store.dispatch("bestTeams");
      store.dispatch("bestleague");
      store.dispatch("newsTicker");
      store.dispatch("permierLeagueGamePlan");
      store.dispatch("PremierLeagueTable");
      store.dispatch("PremierLeagueTransfers");
      store.dispatch("laLigaTarnsfers");

      setInterval(() => {
        next();
      }, 3000);
    });

    const laLigaTable = computed(() => store.state.laligatable);
    const laLigaTableArray = ref([]);
    const LaLigaMatchDay = computed(() => store.state.LaligaMatchDay);
    const newsCarusel = computed(() =>
      store.state.NewsCarusel.map((item) => item.img)
    );
    const newsCaruselHeader = computed(() =>
      store.state.NewsCarusel.map((item) => item.cap)
    );
    const bestPlayersFifa = computed(() => store.state.bestSoccers);
    const bestTeamsFifa = computed(() => store.state.bestTeams.slice(0, 10));
    const bestleagues = computed(() => store.state.bestleagues);
    const newsTickers = computed(() => store.state.NewsTickers);
    const premierLeagueGamePlan = computed(
      () => store.state.PremierLeagueMatchDay
    );
    const premierLeagueTable = computed(
      () => store.state.premierLeagueTable2021
    );
    const newsTransfers = computed(() => store.state.newsTransfersBing);
    const newsTransfersImage = computed(() =>
      store.state.newsTransfersBing.map((item) => item.media)
    );
    const laLigaTransfersNews = computed(() => store.state.bingLaLigaTransfers);
    const laLigaTransfersNewsImage = computed(() =>
      store.state.bingLaLigaTransfers.map((item) => item.media)
    );

    const classProps = ref(Boolean);
    let num1 = ref(0);
    let num2 = ref(1);

    function next() {
      num1.value++;
      num2.value++;
      classProps.value = true;

      if (num2.value == 24) {
        num2.value = 1;
        num1.value = 0;
      }

      setTimeout(() => {
        classProps.value = false;
      }, 500);
    }

    function prev() {
      num1.value--;
      num2.value--;
      classProps.value = true;

      if (num1.value == -1) {
        num2.value = 1;
        num1.value = 0;
      }

      setTimeout(() => {
        classProps.value = false;
      }, 500);
    }

    watch([laLigaTable], () => {
      [laLigaTable.value].forEach(
        (item) => (laLigaTableArray.value = item.res.data.table)
      );
    });

    return {
      store,
      laLigaTable,
      LaLigaMatchDay,
      laLigaTableArray,
      newsCarusel,
      prev,
      next,
      bestPlayersFifa,
      bestTeamsFifa,
      bestleagues,
      newsTickers,
      premierLeagueGamePlan,
      premierLeagueTable,
      newsTransfers,
      newsTransfersImage,
      laLigaTransfersNews,
      laLigaTransfersNewsImage,
      newsCaruselHeader,
      classProps,
      num1,
      num2,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
  height: auto;
  margin: auto;

  .navButton {
    position: sticky;
    top: 0;
    transition: top 0.3s;
    z-index: 2;
  }

  .footer {
    position: fixed;
    bottom: 0;
  }

  .LaLigaComponent {
    margin-top: 20px;
    max-width: 1000px;
    height: auto;
    margin-bottom: 50px;

    @media (min-width: 320px) and (max-width: 767px) {
      margin-top: 20px;
    }

    .LigueTable {
      max-width: 1000px;

      .ligue {
        &__item {
          &__name {
            margin-right: 50px;
          }
          &__matches {
            @media (width: 320px) {
              margin-left: 25px;
            }

            @media (width: 375px) {
              margin-left: 25px;
            }
            @media (width: 425px) {
              margin-left: 43px;
            }
          }

          &__pts {
            @media (width: 320px) {
              margin-right: 5px;
            }

            @media (width: 375px) {
              margin-right: 11px;
            }
            @media (width: 425px) {
              margin-right: 17px;
            }

            @media (width: 768px) {
              margin-left: 20px;
            }
            @media (width: 1024px) {
              margin-left: 5px;
            }
            @media (min-width: 1025px) {
              margin-left: 0px;
            }
          }
        }
      }

      .contentTable {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 700px));
        grid-template-areas: "matchDayTable ligueTable ";
        gap: 20px;

        @media (min-width: 320px) and (max-width: 767px) {
          grid-template-areas:
            "matchDayTable  "
            "ligueTable";
          gap: 8px;
        }

        &__matchDayTable {
          grid-area: matchDayTable;
        }

        &__ligueTable {
          grid-area: ligueTable;
        }
      }
    }
  }

  .carusel {
    height: auto;
    margin: auto;

    &__content {
      display: flex;
      justify-content: center;

      &__btn1 {
        i {
          font-size: 100px;
          color: rgba(156, 147, 147, 0.938);
          opacity: 0.6;

          &:hover {
            cursor: pointer;
            color: rgba(176, 167, 167, 0.938);
            opacity: 0.9;
          }
        }
      }

      &__btn2 {
        i {
          font-size: 100px;
          color: rgba(156, 147, 147, 0.938);
          opacity: 0.6;

          &:hover {
            cursor: pointer;
            color: rgba(176, 167, 167, 0.938);
            opacity: 0.9;
          }
        }
      }
    }
  }

  .transfersComponents {
    margin-top: 60px;
    margin-bottom: 50px;

    .table {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 10px;

      @media (min-width: 320px) {
        font-size: 10px;
      }

      &__one {
        @media (min-width: 320px) and(max-width:768px) {
          margin-top: 20px;
        }
        &__value {
          display: flex;
          justify-content: flex-start;
        }
        p {
          height: 40px;
          display: flex;
          justify-content: flex-start;
          @media (max-width: 375px) {
            font-size: 10px;

            img {
              width: 20px;
              height: 30px;
            }
          }
        }
      }

      &__two {
        height: 200px !important;

        @media (min-width: 320px) and(max-width:768px) {
          margin-top: 20px;
        }

        p {
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;

          @media (max-width: 375px) {
            font-size: 10px;
          }
        }
      }
      &__three {
        height: 200px !important;

        @media (min-width: 320px) and (max-width: 425px) {
          margin-top: 360px;
        }

        @media (width: 768px) {
          margin-top: 10px;
        }

        p {
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;

          @media (max-width: 375px) {
            font-size: 10px;
          }
        }
      }
    }
  }

  .newsTickers {
    max-height: 720px;

    height: auto;
    @media (min-width: 320px) and(max-width:768px) {
      margin-top: 360px;
    }

    &__content {
      display: grid;
      height: auto;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 10px;
    }
  }

  .PremierLigue {
    margin-top: 50px;
    max-width: 1000px;
    height: auto;
    margin-bottom: 300px;

    @media (width: 425px) {
      margin-top: 470px;
    }

    @media (width: 375px) {
      margin-top: 470px;
    }

    @media (width: 768px) {
      margin-top: 30px;
    }

    @media (width: 320px) {
      margin-top: 470px;
    }

    .LigueTable {
      max-width: 1000px;

      .ligue {
        &__item {
          display: flex;
          justify-content: center;
          align-items: center;

          &__name {
            margin-right: 50px;
          }
          &__matches {
            @media (width: 320px) {
              margin-left: 40px;
            }

            @media (width: 375px) {
              margin-left: 60px;
            }
            @media (width: 425px) {
              margin-left: 85px;
            }
          }

          &__pts {
            @media (width: 320px) {
              margin-right: 5px;
            }

            @media (width: 375px) {
              margin-right: 11px;
            }
            @media (width: 425px) {
              margin-right: 10px;
            }
          }
        }
      }

      .contentTable {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 700px));
        grid-template-areas: "matchDayTable ligueTable ";
        gap: 20px;

        @media (min-width: 320px) and (max-width: 767px) {
          grid-template-areas:
            "matchDayTable  "
            "ligueTable";
          gap: 8px;
        }

        &__matchDayTable {
          grid-area: matchDayTable;
        }

        &__ligueTable {
          grid-area: ligueTable;
        }
      }
    }
  }

  .deals {
    max-width: 1000px;
    margin-bottom: 100px;
    margin-top: -250px;

    @media (width: 320px) {
      margin-top: -260px;
    }
    @media (width: 375px) {
      margin-top: -260px;
    }

    .container {
      max-width: 1000px;
      height: auto;

      .table {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 10px;

        &__content {
          &__text {
            p {
              width: 50px;
              height: 50px;
            }
          }
        }
      }
    }
  }

  .ligue {
    height: auto;

    &__items {
      display: flex;
      justify-content: center;
      align-items: center;

      &__header {
        height: 30px;
      }
    }

    &__homeClubImage {
      display: flex;
      justify-content: flex-end;
    }

    &__homeClubName {
      display: flex;
      justify-content: center;
    }
    p {
      height: 40px;
      font-size: 12px;
      margin-top: 5px;
    }
  }

  img {
    width: 27px;
    height: 37px;
  }

  .img1 {
    width: 27px;
    height: 27px;
  }
}
</style>
