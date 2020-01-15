interface Oomer {
  birthday: string;
  names: string[];
}

interface Environment {
  oomers: {
    [key: string]: Oomer;
  }
}

const environment: Environment = {
  oomers: {
    boomer: {
      birthday: '25th May 2075',
      names: [
        'Chris',
        'Boomer',
        'That pedo uncle',
        'Everyone\'s dad',
        '"Mr Zwift"',
        '🍆'
      ]
    },
    bloomer: {
      birthday: '17th Jan 1984',
      names: [
        'Steve',
        'Phteven',
        'Bloomer',
        'Hitler',
        '🍆'
      ]
    },
    zoomer: {
      birthday: '14th Oct 1993',
      names: [
        'Jack',
        'Zoomer',
        'Muscles Boy',
        'TheVegan™️',
        '🍆'
      ]
    }
  }
};

export default environment;
