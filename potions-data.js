window.STS2_POTIONS_DATA = [
  {
    "id": "EssenceOfDarkness",
    "name": "Essence of Darkness",
    "koName": "암흑의 정수",
    "rarity": "Rare",
    "pool": "defect",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/essence_of_darkness.png",
    "dynamicVars": [],
    "description": {
      "en": "[gold]Channel[/gold] a [gold]Dark[/gold] for each of your [gold]Orb Slots[/gold].",
      "ko": "모든 [gold]구체 슬롯[/gold]에 [gold]암흑[/gold]을 [gold]영창[/gold]합니다."
    }
  },
  {
    "id": "FocusPotion",
    "name": "Focus Potion",
    "koName": "밀집 포션",
    "rarity": "Common",
    "pool": "defect",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/focus_potion.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "FocusPower",
        "value": 2
      }
    ],
    "description": {
      "en": "Gain [blue]{FocusPower}[/blue] [gold]Focus[/gold].",
      "ko": "[gold]밀집[/gold]을 [blue]{FocusPower}[/blue] 얻습니다."
    }
  },
  {
    "id": "PotionOfCapacity",
    "name": "Potion of Capacity",
    "koName": "수용의 포션",
    "rarity": "Uncommon",
    "pool": "defect",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/potion_of_capacity.png",
    "dynamicVars": [
      {
        "var_type": "Repeat",
        "value": 2
      }
    ],
    "description": {
      "en": "Gain [blue]{Repeat}[/blue] [gold]Orb {Repeat:plural:Slot|Slots}[/gold].",
      "ko": "[gold]구체 슬롯[/gold]을 [blue]{Repeat}[/blue]개 얻습니다."
    }
  },
  {
    "id": "FoulPotion",
    "name": "Foul Potion",
    "koName": "역겨운 포션",
    "rarity": "Event",
    "pool": "event",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/foul_potion.png",
    "dynamicVars": [
      {
        "var_type": "Damage",
        "value": 12,
        "props": "Unpowered"
      },
      {
        "var_type": "Gold",
        "value": 100
      }
    ],
    "description": {
      "en": "Deal [blue]{Damage}[/blue] damage to ALL players and enemies.\\nCan be thrown at the [gold]Merchant[/gold] for [blue]{Gold}[/blue] [gold]Gold[/gold] instead.",
      "ko": "모든 플레이어와 적에게 피해를 [blue]{Damage}[/blue] 줍니다.\\n[gold]상인[/gold]에게도 던질 수 있으며, 상인에게 던질 시 피해를 주는 대신 [gold]골드[/gold]를 [blue]{Gold}[/blue] 얻습니다."
    }
  },
  {
    "id": "GlowwaterPotion",
    "name": "Glowwater Potion",
    "koName": "발광수 포션",
    "rarity": "Event",
    "pool": "event",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/glowwater_potion.png",
    "dynamicVars": [
      {
        "var_type": "Cards",
        "value": 10
      }
    ],
    "description": {
      "en": "[gold]Exhaust[/gold] your [gold]Hand[/gold]. Draw [blue]{Cards}[/blue] cards.",
      "ko": "[gold]손[/gold]에 있는 모든 카드를 [gold]소멸[/gold]시킵니다. 카드를 [blue]{Cards}[/blue]장 뽑습니다."
    }
  },
  {
    "id": "Ashwater",
    "name": "Ashwater",
    "koName": "잿물",
    "rarity": "Uncommon",
    "pool": "ironclad",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/ashwater.png",
    "dynamicVars": [],
    "description": {
      "en": "[gold]Exhaust[/gold] any number of cards in your [gold]Hand[/gold].",
      "ko": "[gold]손[/gold]에 있는 카드를 원하는 만큼 [gold]소멸[/gold]시킵니다."
    }
  },
  {
    "id": "BloodPotion",
    "name": "Blood Potion",
    "koName": "피 포션",
    "rarity": "Common",
    "pool": "ironclad",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/blood_potion.png",
    "dynamicVars": [
      {
        "var_type": "Dynamic",
        "key": "HealPercent",
        "value": 20
      }
    ],
    "description": {
      "en": "Heal for [green]{HealPercent}%[/green] of your Max HP.",
      "ko": "최대 체력의 [green]{HealPercent}%[/green]만큼 체력을 회복합니다."
    }
  },
  {
    "id": "SoldiersStew",
    "name": "Soldier's Stew",
    "koName": "병사의 스튜",
    "rarity": "Rare",
    "pool": "ironclad",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/soldiers_stew.png",
    "dynamicVars": [],
    "description": {
      "en": "All cards containing [gold]Strike[/gold] gain [blue]1[/blue] [gold]Replay[/gold] this combat.",
      "ko": "이번 전투 동안 이름에 [gold]타격[/gold]이 포함된 카드가 [gold]재사용[/gold]을 [blue]1[/blue] 얻습니다."
    }
  },
  {
    "id": "BoneBrew",
    "name": "Bone Brew",
    "koName": "뼈다귀 영액",
    "rarity": "Uncommon",
    "pool": "necrobinder",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/bone_brew.png",
    "dynamicVars": [
      {
        "var_type": "Summon",
        "value": 15
      }
    ],
    "description": {
      "en": "[gold]Summon[/gold] [blue]{Summon}[/blue].",
      "ko": "[gold]소환[/gold] [blue]{Summon}[/blue]."
    }
  },
  {
    "id": "PotOfGhouls",
    "name": "Pot of Ghouls",
    "koName": "구울 항아리",
    "rarity": "Rare",
    "pool": "necrobinder",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/pot_of_ghouls.png",
    "dynamicVars": [
      {
        "var_type": "Cards",
        "value": 2
      }
    ],
    "description": {
      "en": "Add [blue]{Cards}[/blue] [gold]{Cards:plural:Soul|Souls}[/gold] into your [gold]Hand[/gold].",
      "ko": "[gold]영혼[/gold]을 [blue]{Cards}[/blue]장 [gold]손[/gold]으로 가져옵니다."
    }
  },
  {
    "id": "PotionOfDoom",
    "name": "Potion of Doom",
    "koName": "종말의 포션",
    "rarity": "Common",
    "pool": "necrobinder",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/potion_of_doom.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "DoomPower",
        "value": 33
      }
    ],
    "description": {
      "en": "Apply [blue]{DoomPower}[/blue] [gold]Doom[/gold].",
      "ko": "[gold]종말[/gold]을 [blue]{DoomPower}[/blue] 부여합니다."
    }
  },
  {
    "id": "CosmicConcoction",
    "name": "Cosmic Concoction",
    "koName": "우주적 혼합물",
    "rarity": "Rare",
    "pool": "regent",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/cosmic_concoction.png",
    "dynamicVars": [
      {
        "var_type": "Cards",
        "value": 3
      }
    ],
    "description": {
      "en": "Add [blue]{Cards}[/blue] [gold]Upgraded[/gold] Colorless {Cards:plural:card|cards} into your [gold]Hand[/gold].",
      "ko": "[gold]강화[/gold]된 무색 카드를 [blue]{Cards}[/blue]장 [gold]손[/gold]으로 가져옵니다."
    }
  },
  {
    "id": "KingsCourage",
    "name": "King's Courage",
    "koName": "왕의 기개",
    "rarity": "Uncommon",
    "pool": "regent",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/kings_courage.png",
    "dynamicVars": [
      {
        "var_type": "Forge",
        "value": 15
      }
    ],
    "description": {
      "en": "[gold]Forge[/gold] [blue]{Forge}[/blue].",
      "ko": "[gold]단조[/gold] [blue]{Forge}[/blue]."
    }
  },
  {
    "id": "StarPotion",
    "name": "Star Potion",
    "koName": "별 포션",
    "rarity": "Common",
    "pool": "regent",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/star_potion.png",
    "dynamicVars": [
      {
        "var_type": "Stars",
        "value": 3
      }
    ],
    "description": {
      "en": "Gain {Stars:starIcons()}.",
      "ko": "{Stars:starIcons()}을 얻습니다."
    }
  },
  {
    "id": "AttackPotion",
    "name": "Attack Potion",
    "koName": "공격 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/attack_potion.png",
    "dynamicVars": [],
    "description": {
      "en": "Choose [blue]1[/blue] of [blue]3[/blue] random Attack cards to add into your [gold]Hand[/gold]. It's free to play this turn.",
      "ko": "무작위 공격 카드 [blue]3[/blue]장 중 [blue]1[/blue]장을 선택해 [gold]손[/gold]으로 가져옵니다. 이번 턴 동안 그 카드를 비용 없이 사용할 수 있습니다."
    }
  },
  {
    "id": "BeetleJuice",
    "name": "Beetle Juice",
    "koName": "딱정벌레 주스",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/beetle_juice.png",
    "dynamicVars": [
      {
        "var_type": "Repeat",
        "value": 4
      },
      {
        "var_type": "Dynamic",
        "key": "DamageDecrease",
        "value": 30
      }
    ],
    "description": {
      "en": "Enemy's attacks deal [blue]{DamageDecrease}%[/blue] less damage {Repeat:plural:next turn|for the next [blue]{}[/blue] turns}.",
      "ko": "{Repeat:choose(1):다음 턴에|다음 [blue]{}[/blue]턴 동안} 적이 가하는 공격의 피해량이 [blue]{DamageDecrease}%[/blue] 감소합니다."
    }
  },
  {
    "id": "BlessingOfTheForge",
    "name": "Blessing of the Forge",
    "koName": "재련의 축복",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/blessing_of_the_forge.png",
    "dynamicVars": [],
    "description": {
      "en": "[gold]Upgrade[/gold] all cards in your [gold]Hand[/gold] for the rest of combat.",
      "ko": "[gold]손[/gold]에 있는 모든 카드를 남은 전투 동안 [gold]강화[/gold]합니다."
    }
  },
  {
    "id": "BlockPotion",
    "name": "Block Potion",
    "koName": "방어도 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/block_potion.png",
    "dynamicVars": [
      {
        "var_type": "Block",
        "value": 12,
        "props": "Unpowered"
      }
    ],
    "description": {
      "en": "Gain [blue]{Block}[/blue] [gold]Block[/gold].",
      "ko": "[gold]방어도[/gold]를 [blue]{Block}[/blue] 얻습니다."
    }
  },
  {
    "id": "BottledPotential",
    "name": "Bottled Potential",
    "koName": "병 속의 가능성",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/bottled_potential.png",
    "dynamicVars": [
      {
        "var_type": "Cards",
        "value": 5
      }
    ],
    "description": {
      "en": "Shuffle ALL your cards into your [gold]Draw Pile[/gold]. Draw [blue]{Cards}[/blue] {Cards:plural:card|cards}.",
      "ko": "모든 카드를 [gold]뽑을 카드 더미[/gold]에 섞어넣습니다. 카드를 [blue]{Cards}[/blue]장 뽑습니다."
    }
  },
  {
    "id": "Clarity",
    "name": "Clarity Extract",
    "koName": "명확성 추출물",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/clarity.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "ClarityPower",
        "value": 3
      },
      {
        "var_type": "Cards",
        "value": 1
      }
    ],
    "description": {
      "en": "Draw [blue]{Cards}[/blue] {Cards:plural:card|cards}. At the start of your next {ClarityPower:plural:turn|[blue]{}[/blue] turns}, draw [blue]1[/blue] additional card.",
      "ko": "카드를 [blue]{Cards}[/blue]장 뽑습니다. 다음 {ClarityPower:choose(1):턴|[blue]{}[/blue]턴} 시작 시, 카드를 추가로 [blue]1[/blue]장 뽑습니다."
    }
  },
  {
    "id": "ColorlessPotion",
    "name": "Colorless Potion",
    "koName": "무색 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/colorless_potion.png",
    "dynamicVars": [],
    "description": {
      "en": "Choose [blue]1[/blue] of [blue]3[/blue] random Colorless cards to add into your [gold]Hand[/gold]. It's free to play this turn.",
      "ko": "무작위 무색 카드 [blue]3[/blue]장 중 [blue]1[/blue]장을 선택해 [gold]손[/gold]으로 가져옵니다. 이번 턴 동안 그 카드를 비용 없이 사용할 수 있습니다."
    }
  },
  {
    "id": "CureAll",
    "name": "Cure All",
    "koName": "묘약",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/cure_all.png",
    "dynamicVars": [
      {
        "var_type": "Cards",
        "value": 2
      },
      {
        "var_type": "Energy",
        "value": 1
      }
    ],
    "description": {
      "en": "Gain {Energy:energyIcons()}. Draw [blue]{Cards}[/blue] {Cards:plural:card|cards}.",
      "ko": "{Energy:energyIcons()}를 얻습니다. 카드를 [blue]{Cards}[/blue]장 뽑습니다."
    }
  },
  {
    "id": "DexterityPotion",
    "name": "Dexterity Potion",
    "koName": "민첩 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/dexterity_potion.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "DexterityPower",
        "value": 2
      }
    ],
    "description": {
      "en": "Gain [blue]{DexterityPower}[/blue] [gold]Dexterity[/gold].",
      "ko": "[gold]민첩[/gold]을 [blue]{DexterityPower}[/blue] 얻습니다."
    }
  },
  {
    "id": "DistilledChaos",
    "name": "Distilled Chaos",
    "koName": "정제된 혼돈",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/distilled_chaos.png",
    "dynamicVars": [
      {
        "var_type": "Repeat",
        "value": 3
      }
    ],
    "description": {
      "en": "Play the top [blue]{Repeat}[/blue] cards of your [gold]Draw Pile[/gold].",
      "ko": "[gold]뽑을 카드 더미[/gold] 위에서부터 [blue]{Repeat}[/blue]장의 카드를 사용합니다."
    }
  },
  {
    "id": "DropletOfPrecognition",
    "name": "Droplet of Precognition",
    "koName": "예견의 방울",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/droplet_of_precognition.png",
    "dynamicVars": [],
    "description": {
      "en": "Choose a card in your [gold]Draw Pile[/gold] and add it into your [gold]Hand[/gold].",
      "ko": "[gold]뽑을 카드 더미[/gold]에서 카드를 1장 선택해 [gold]손[/gold]으로 가져옵니다."
    }
  },
  {
    "id": "Duplicator",
    "name": "Duplicator",
    "koName": "복제액",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/duplicator.png",
    "dynamicVars": [],
    "description": {
      "en": "This turn, your next card is played an extra time.",
      "ko": "이번 턴에 사용하는 다음 카드가 1번 추가로 사용됩니다."
    }
  },
  {
    "id": "EnergyPotion",
    "name": "Energy Potion",
    "koName": "에너지 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/energy_potion.png",
    "dynamicVars": [
      {
        "var_type": "Energy",
        "value": 2
      }
    ],
    "description": {
      "en": "Gain {Energy:energyIcons()}.",
      "ko": "{Energy:energyIcons()}를 얻습니다."
    }
  },
  {
    "id": "EntropicBrew",
    "name": "Entropic Brew",
    "koName": "엔트로피의 영액",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/entropic_brew.png",
    "dynamicVars": [],
    "description": {
      "en": "Fill all your empty potion slots with random potions.",
      "ko": "비어있는 모든 포션 슬롯을 무작위 포션으로 채웁니다."
    }
  },
  {
    "id": "ExplosiveAmpoule",
    "name": "Explosive Ampoule",
    "koName": "폭발성 앰플",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/explosive_ampoule.png",
    "dynamicVars": [
      {
        "var_type": "Damage",
        "value": 10,
        "props": "Unpowered"
      }
    ],
    "description": {
      "en": "Deal [blue]{Damage}[/blue] damage to ALL enemies.",
      "ko": "모든 적에게 피해를 [blue]{Damage}[/blue] 줍니다."
    }
  },
  {
    "id": "FairyInABottle",
    "name": "Fairy in a Bottle",
    "koName": "병 속의 요정",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/fairy_in_a_bottle.png",
    "dynamicVars": [],
    "description": {
      "en": "When your HP would be reduced to [blue]0[/blue], instead this potion is discarded and you heal to [blue]30%[/blue] of your Max HP.",
      "ko": "체력이 [blue]0[/blue]이 될 때, 그 대신 이 포션이 버려지고 최대 체력의 [blue]30%[/blue]만큼 체력을 회복합니다."
    }
  },
  {
    "id": "FirePotion",
    "name": "Fire Potion",
    "koName": "화염 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/fire_potion.png",
    "dynamicVars": [
      {
        "var_type": "Damage",
        "value": 20,
        "props": "Unpowered"
      }
    ],
    "description": {
      "en": "Deal [blue]{Damage}[/blue] damage.",
      "ko": "피해를 [blue]{Damage}[/blue] 줍니다."
    }
  },
  {
    "id": "FlexPotion",
    "name": "Flex Potion",
    "koName": "몸풀기 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/flex_potion.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "StrengthPower",
        "value": 5
      }
    ],
    "description": {
      "en": "Gain [blue]{StrengthPower}[/blue] [gold]Strength[/gold]. At the end of your turn, lose [blue]{StrengthPower}[/blue] [gold]Strength[/gold].",
      "ko": "[gold]힘[/gold]을 [blue]{StrengthPower}[/blue] 얻습니다. 내 턴 종료 시 [gold]힘[/gold]을 [blue]{StrengthPower}[/blue] 잃습니다."
    }
  },
  {
    "id": "Fortifier",
    "name": "Fortifier",
    "koName": "강장제",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/fortifier.png",
    "dynamicVars": [],
    "description": {
      "en": "Triple your [gold]Block[/gold].",
      "ko": "[gold]방어도[/gold]를 3배로 만듭니다."
    }
  },
  {
    "id": "FruitJuice",
    "name": "Fruit Juice",
    "koName": "과일 주스",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/fruit_juice.png",
    "dynamicVars": [
      {
        "var_type": "MaxHp",
        "value": 5
      }
    ],
    "description": {
      "en": "Gain [blue]{MaxHp}[/blue] Max HP.",
      "ko": "최대 체력을 [blue]{MaxHp}[/blue] 얻습니다."
    }
  },
  {
    "id": "FyshOil",
    "name": "Fysh Oil",
    "koName": "물교기 기름",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/fysh_oil.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "StrengthPower",
        "value": 1
      },
      {
        "var_type": "Power",
        "power_type": "DexterityPower",
        "value": 1
      }
    ],
    "description": {
      "en": "Gain [blue]{StrengthPower}[/blue] [gold]Strength[/gold] and [blue]{DexterityPower}[/blue] [gold]Dexterity[/gold].",
      "ko": "[gold]힘[/gold]을 [blue]{StrengthPower}[/blue] 얻고 [gold]민첩[/gold]을 [blue]{DexterityPower}[/blue] 얻습니다."
    }
  },
  {
    "id": "GamblersBrew",
    "name": "Gambler's Brew",
    "koName": "도박꾼의 영액",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/gamblers_brew.png",
    "dynamicVars": [],
    "description": {
      "en": "Discard any number of cards, then draw that many.",
      "ko": "원하는 만큼 카드를 버리고 버린 만큼 카드를 뽑습니다."
    }
  },
  {
    "id": "GigantificationPotion",
    "name": "Gigantification Potion",
    "koName": "거대화 포션",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/gigantification_potion.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "GigantificationPower",
        "value": 1
      }
    ],
    "description": {
      "en": "The next Attack you play deals triple damage.",
      "ko": "다음에 사용하는 공격 카드의 피해량이 3배로 증가합니다."
    }
  },
  {
    "id": "HeartOfIron",
    "name": "Heart of Iron",
    "koName": "무쇠의 심장",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/heart_of_iron.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "PlatingPower",
        "value": 7
      }
    ],
    "description": {
      "en": "Gain [blue]{PlatingPower}[/blue] [gold]Plating[/gold].",
      "ko": "[gold]판금[/gold]을 [blue]{PlatingPower}[/blue] 얻습니다."
    }
  },
  {
    "id": "LiquidBronze",
    "name": "Liquid Bronze",
    "koName": "액상 청동",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/liquid_bronze.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "ThornsPower",
        "value": 3
      }
    ],
    "description": {
      "en": "Gain [blue]{ThornsPower}[/blue] [gold]Thorns[/gold].",
      "ko": "[gold]가시[/gold]를 [blue]{ThornsPower}[/blue] 얻습니다."
    }
  },
  {
    "id": "LiquidMemories",
    "name": "Liquid Memories",
    "koName": "액상 기억",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/liquid_memories.png",
    "dynamicVars": [],
    "description": {
      "en": "Put a card from your [gold]Discard Pile[/gold] into your [gold]Hand[/gold]. It's free to play this turn.",
      "ko": "[gold]버린 카드 더미[/gold]에서 카드를 1장 선택해 [gold]손[/gold]으로 가져옵니다. 이번 턴 동안 그 카드를 비용 없이 사용할 수 있습니다."
    }
  },
  {
    "id": "LuckyTonic",
    "name": "Lucky Tonic",
    "koName": "행운의 활력소",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/lucky_tonic.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "BufferPower",
        "value": 1
      }
    ],
    "description": {
      "en": "Gain [blue]{BufferPower}[/blue] [gold]Buffer[/gold].",
      "ko": "[gold]버퍼[/gold]를 [blue]{BufferPower}[/blue] 얻습니다."
    }
  },
  {
    "id": "MazalethsGift",
    "name": "Mazaleth's Gift",
    "koName": "마잘레스의 선물",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/mazaleths_gift.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "RitualPower",
        "value": 1
      }
    ],
    "description": {
      "en": "Gain [blue]{RitualPower}[/blue] [gold]Ritual[/gold].",
      "ko": "[gold]의식[/gold]을 [blue]{RitualPower}[/blue] 얻습니다."
    }
  },
  {
    "id": "OrobicAcid",
    "name": "Orobic Acid",
    "koName": "오로바스산",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/orobic_acid.png",
    "dynamicVars": [],
    "description": {
      "en": "Add a random Attack, Skill, and Power into your [gold]Hand[/gold]. They're free to play this turn.",
      "ko": "무작위 공격, 스킬, 파워 카드를 [gold]손[/gold]으로 가져옵니다. 이번 턴 동안 그 카드들을 비용 없이 사용할 수 있습니다."
    }
  },
  {
    "id": "PotionOfBinding",
    "name": "Potion of Binding",
    "koName": "속박의 포션",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/potion_of_binding.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "VulnerablePower",
        "value": 1
      },
      {
        "var_type": "Power",
        "power_type": "WeakPower",
        "value": 1
      }
    ],
    "description": {
      "en": "Apply [blue]{WeakPower:diff()}[/blue] [gold]Weak[/gold] and [blue]{VulnerablePower:diff()}[/blue] [gold]Vulnerable[/gold] to ALL enemies.",
      "ko": "모든 적에게 [gold]약화[/gold]를 [blue]{WeakPower:diff()}[/blue], [gold]취약[/gold]을 [blue]{VulnerablePower:diff()}[/blue] 부여합니다."
    }
  },
  {
    "id": "PowderedDemise",
    "name": "Powdered Demise",
    "koName": "종언의 가루",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/powdered_demise.png",
    "dynamicVars": [
      {
        "var_type": "Dynamic",
        "key": "Demise",
        "value": 9
      }
    ],
    "description": {
      "en": "Enemy loses [blue]{Demise}[/blue] HP at the end of each of its turns.",
      "ko": "적의 턴 종료 시 적이 체력을 [blue]{Demise}[/blue] 잃습니다."
    }
  },
  {
    "id": "PowerPotion",
    "name": "Power Potion",
    "koName": "파워 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/power_potion.png",
    "dynamicVars": [],
    "description": {
      "en": "Choose [blue]1[/blue] of [blue]3[/blue] random Power cards to add into your [gold]Hand[/gold]. It's free to play this turn.",
      "ko": "무작위 파워 카드 [blue]3[/blue]장 중 [blue]1[/blue]장을 선택해 [gold]손[/gold]으로 가져옵니다. 이번 턴 동안 그 카드를 비용 없이 사용할 수 있습니다."
    }
  },
  {
    "id": "RadiantTincture",
    "name": "Radiant Tincture",
    "koName": "광휘의 팅크",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/radiant_tincture.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "RadiancePower",
        "value": 3
      },
      {
        "var_type": "Energy",
        "value": 1
      }
    ],
    "description": {
      "en": "Gain {Energy:energyIcons()}. Gain an additional {energyPrefix:energyIcons(1)} at the start of your next [blue]{RadiancePower}[/blue] {RadiancePower:plural:turn|turns}.",
      "ko": "{Energy:energyIcons()}를 얻습니다. 다음 [blue]{RadiancePower}[/blue]턴 동안 추가로 {energyPrefix:energyIcons(1)}를 얻습니다."
    }
  },
  {
    "id": "RegenPotion",
    "name": "Regen Potion",
    "koName": "재생 포션",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/regen_potion.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "RegenPower",
        "value": 5
      }
    ],
    "description": {
      "en": "Gain [green]{RegenPower}[/green] [gold]Regen[/gold].",
      "ko": "[gold]재생[/gold]을 [green]{RegenPower}[/green] 얻습니다."
    }
  },
  {
    "id": "ShacklingPotion",
    "name": "Shackling Potion",
    "koName": "족쇄 포션",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/shackling_potion.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "StrengthPower",
        "value": 7
      }
    ],
    "description": {
      "en": "ALL enemies lose [blue]{StrengthPower}[/blue] [gold]Strength[/gold] this turn.",
      "ko": "이번 턴 동안 모든 적이 [gold]힘[/gold]을 [blue]{StrengthPower}[/blue] 잃습니다."
    }
  },
  {
    "id": "ShipInABottle",
    "name": "Ship in a Bottle",
    "koName": "병 속의 배",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/ship_in_a_bottle.png",
    "dynamicVars": [
      {
        "var_type": "Block",
        "value": 10,
        "props": "Unpowered"
      }
    ],
    "description": {
      "en": "Gain [blue]{Block:diff()}[/blue] [gold]Block[/gold]. Next turn, gain [blue]{Block:diff()}[/blue] [gold]Block[/gold].",
      "ko": "[gold]방어도[/gold]를 [blue]{Block:diff()}[/blue] 얻습니다. 다음 턴에 [gold]방어도[/gold]를 [blue]{Block:diff()}[/blue] 얻습니다."
    }
  },
  {
    "id": "SkillPotion",
    "name": "Skill Potion",
    "koName": "스킬 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/skill_potion.png",
    "dynamicVars": [],
    "description": {
      "en": "Choose [blue]1[/blue] of [blue]3[/blue] random Skill cards to add into your [gold]Hand[/gold]. It's free to play this turn.",
      "ko": "무작위 스킬 카드 [blue]3[/blue]장 중 [blue]1[/blue]장을 선택해 [gold]손[/gold]으로 가져옵니다. 이번 턴 동안 그 카드를 비용 없이 사용할 수 있습니다."
    }
  },
  {
    "id": "SneckoOil",
    "name": "Snecko Oil",
    "koName": "스네코 기름",
    "rarity": "Rare",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/snecko_oil.png",
    "dynamicVars": [
      {
        "var_type": "Cards",
        "value": 7
      }
    ],
    "description": {
      "en": "Draw [blue]{Cards}[/blue] cards. Randomize the cost of cards in your [gold]Hand[/gold] this turn.",
      "ko": "카드를 [blue]{Cards}[/blue]장 뽑습니다. 이번 턴 동안 [gold]손[/gold]에 있는 카드의 비용을 무작위로 변경합니다."
    }
  },
  {
    "id": "SpeedPotion",
    "name": "Speed Potion",
    "koName": "속도 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/speed_potion.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "DexterityPower",
        "value": 5
      }
    ],
    "description": {
      "en": "Gain [blue]{DexterityPower}[/blue] [gold]Dexterity[/gold]. At the end of your turn, lose [blue]{DexterityPower}[/blue] [gold]Dexterity[/gold].",
      "ko": "[gold]민첩[/gold]을 [blue]{DexterityPower}[/blue] 얻습니다. 내 턴 종료 시 [gold]민첩[/gold]을 [blue]{DexterityPower}[/blue] 잃습니다."
    }
  },
  {
    "id": "StableSerum",
    "name": "Stable Serum",
    "koName": "안정된 혈청",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/stable_serum.png",
    "dynamicVars": [
      {
        "var_type": "Repeat",
        "value": 2
      }
    ],
    "description": {
      "en": "[gold]Retain[/gold] your [gold]Hand[/gold] for [blue]{Repeat}[/blue] {Repeat:plural:turn|turns}.",
      "ko": "[gold]손[/gold]에 있는 카드를 [blue]{Repeat}[/blue]턴 동안 [gold]보존[/gold]합니다."
    }
  },
  {
    "id": "StrengthPotion",
    "name": "Strength Potion",
    "koName": "힘 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/strength_potion.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "StrengthPower",
        "value": 2
      }
    ],
    "description": {
      "en": "Gain [blue]{StrengthPower}[/blue] [gold]Strength[/gold].",
      "ko": "[gold]힘[/gold]을 [blue]{StrengthPower}[/blue] 얻습니다."
    }
  },
  {
    "id": "SwiftPotion",
    "name": "Swift Potion",
    "koName": "신속 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/swift_potion.png",
    "dynamicVars": [
      {
        "var_type": "Cards",
        "value": 3
      }
    ],
    "description": {
      "en": "Draw [blue]{Cards}[/blue] {Cards:plural:card|cards}.",
      "ko": "카드를 [blue]{Cards}[/blue]장 뽑습니다."
    }
  },
  {
    "id": "TouchOfInsanity",
    "name": "Touch of Insanity",
    "koName": "광기의 손길",
    "rarity": "Uncommon",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/touch_of_insanity.png",
    "dynamicVars": [],
    "description": {
      "en": "Choose a card in your [gold]Hand[/gold]. It is free to play this combat.",
      "ko": "[gold]손[/gold]에서 카드를 1장 선택합니다. 이번 전투 동안 그 카드를 비용 없이 사용할 수 있습니다."
    }
  },
  {
    "id": "VulnerablePotion",
    "name": "Vulnerable Potion",
    "koName": "취약 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/vulnerable_potion.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "VulnerablePower",
        "value": 3
      }
    ],
    "description": {
      "en": "Apply [blue]{VulnerablePower}[/blue] [gold]Vulnerable[/gold].",
      "ko": "[gold]취약[/gold]을 [blue]{VulnerablePower}[/blue] 부여합니다."
    }
  },
  {
    "id": "WeakPotion",
    "name": "Weak Potion",
    "koName": "약화 포션",
    "rarity": "Common",
    "pool": "shared",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/weak_potion.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "WeakPower",
        "value": 3
      }
    ],
    "description": {
      "en": "Apply [blue]{WeakPower}[/blue] [gold]Weak[/gold].",
      "ko": "[gold]약화[/gold]를 [blue]{WeakPower}[/blue] 부여합니다."
    }
  },
  {
    "id": "CunningPotion",
    "name": "Cunning Potion",
    "koName": "교활함 포션",
    "rarity": "Uncommon",
    "pool": "silent",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/cunning_potion.png",
    "dynamicVars": [
      {
        "var_type": "Cards",
        "value": 3
      }
    ],
    "description": {
      "en": "Add [blue]{Cards}[/blue] [gold]Upgraded {Cards:plural:Shiv|Shivs}[/gold] into your [gold]Hand[/gold].",
      "ko": "[gold]강화[/gold]된 [gold]단도[/gold]를 [blue]{Cards}[/blue]장 [gold]손[/gold]으로 가져옵니다."
    }
  },
  {
    "id": "GhostInAJar",
    "name": "Ghost in a Jar",
    "koName": "단지 속의 유령",
    "rarity": "Rare",
    "pool": "silent",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/ghost_in_a_jar.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "IntangiblePower",
        "value": 1
      }
    ],
    "description": {
      "en": "Gain [blue]1[/blue] [gold]Intangible[/gold].",
      "ko": "[gold]불가침[/gold]을 [blue]1[/blue] 얻습니다."
    }
  },
  {
    "id": "PoisonPotion",
    "name": "Poison Potion",
    "koName": "중독 포션",
    "rarity": "Common",
    "pool": "silent",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/poison_potion.png",
    "dynamicVars": [
      {
        "var_type": "Power",
        "power_type": "PoisonPower",
        "value": 6
      }
    ],
    "description": {
      "en": "Apply [blue]{PoisonPower}[/blue] [gold]Poison[/gold].",
      "ko": "[gold]중독[/gold]을 [blue]{PoisonPower}[/blue] 부여합니다."
    }
  },
  {
    "id": "PotionShapedRock",
    "name": "Potion-Shaped Rock",
    "koName": "포션 모양 돌",
    "rarity": "Token",
    "pool": "token",
    "imageUrl": "https://s-stats-platform-cdn.op.gg/slay-the-spire2/images/potions/potion_shaped_rock.png",
    "dynamicVars": [
      {
        "var_type": "Damage",
        "value": 15,
        "props": "Unpowered"
      }
    ],
    "description": {
      "en": "Deal [blue]{Damage}[/blue] damage.",
      "ko": "피해를 [blue]{Damage}[/blue] 줍니다."
    }
  }
];
