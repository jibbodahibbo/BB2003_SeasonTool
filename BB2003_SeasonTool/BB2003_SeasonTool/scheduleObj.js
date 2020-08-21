/*
Opponent
Can't tell this one
Has it been played yet (AA = no, AB = yes)
Your score
Computers score
Can't tell
Home (AA) or Away (AB)

*/

class scheduleObj{
    constructor(sequence) {
      this.sequence = sequence;
      this.weeks = splitSequence(sequence,14);

  }


    getOpponent(week){
      var opponent = pairToInt(this.weeks[week].substring(0,2));
      return opponent;
    }

    getMystery(week){
      var mystery = pairToInt(this.weeks[week].substring(2,4));
      return mystery;
    }

    IsGamePlayed(week){
      var isGamePlayed = pairToInt(this.weeks[week].substring(4,6));
      return isGamePlayed;
    }

    getThisTeamScore(week){
      var thisteamscore = pairToInt(this.weeks[week].substring(6,8));
      return thisteamscore;
    }

    getOtherTeamScore(week){
      var thisteamscore = pairToInt(this.weeks[week].substring(8,10));
      return thisteamscore;
    }

    getMystery2(week){
      var mystery2 = pairToInt(this.weeks[week].substring(10,12));
      return mystery2;
    }

    isHomeGame(week){
      var ishome = pairToInt(this.weeks[week].substring(12,14));
      return ishome;
    }


}
