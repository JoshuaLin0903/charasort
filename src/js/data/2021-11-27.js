dataSetVersion = "2021-11-27"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group Name",
    key: "group",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      { name: "GFRIEND", key: "gfriend" },
      { name: "IZ*ONE", key: "izone" },
      { name: "LOONA", key: "loona" },
      { name: "Seventeen", key: "svt"},
      { name: "Day6", key: "day6" },
      { name: "IU", key: "iu" }
    ]
  },
  {
    name: "Filter by Generation",
    key: "gen",
    tooltip: "Check this to restrict to certain generation (according to debut year).",
    checked: false,
    sub: [
      { name: "1st generation", key: "gen1", tooltip: "debut before 2002" },
      { name: "2nd generation", key: "gen2", tooltip: "debut from 2003 to 2009" },
      { name: "3rd generation", key: "gen3", tooltip: "debut from 2010 to 2013" },
      { name: "4th generation", key: "gen4", tooltip: "debut from 2014 to 2017" },
      { name: "5th generation", key: "gen5", tooltip: "debut after 2018" },
    ]
  },
  {
    name: "Filter by Group Gender/Soloist",
    key: "type",
    tooltip: "Check this to restrict to certain gender or soloist.",
    checked: false,
    sub: [
      { name: "female group", key: "fg" },
      { name: "male group", key: "mg" },
      { name: "female artist", key: "fa" },
      { name: "male artist", key: "ma" },
      { name: "others", key: "o" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Sowon",
    img: "WBcjRQa.png",
    opts: {
      group: ["gfriend"],
      gen: ["gen4"],
      type: ["fg"]
    }
  },
  {
    name: "Yerin",
    img: "WBcjRQa.png",
    opts: {
      group: ["gfriend"],
      gen: ["gen4"],
      type: ["fg"]
    }
  },
  {
    name: "Eunha",
    img: "WBcjRQa.png",
    opts: {
      group: ["gfriend"],
      gen: ["gen4"],
      type: ["fg"]
    }
  },
  {
    name: "Yuju",
    img: "WBcjRQa.png",
    opts: {
      group: ["gfriend"],
      gen: ["gen4"],
      type: ["fg"]
    }
  },
  {
    name: "SinB",
    img: "WBcjRQa.png",
    opts: {
      group: ["gfriend"],
      gen: ["gen4"],
      type: ["fg"]
    }
  },
  {
    name: "Umji",
    img: "WBcjRQa.png",
    opts: {
      group: ["gfriend"],
      gen: ["gen4"],
      type: ["fg"]
    }
  },
  
];
