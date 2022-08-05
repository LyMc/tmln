export const types = {
  buildings: {
    farm: {
      id: 'farm',
      icon: '👩🏼‍🌾',
      speed: 1.7,
      resourceId: 'wheat',
      description: 'Farm produces wheat',
    },
    city: {
      id: 'city',
      icon: '🌃',
      speed: 0.1,
      resourceId: 'person',
      description: 'City produces people',
    },
  },
  sources: {
    wheat: {
      id: 'wheat',
      icon: '🌾',
      resourceId: 'wheat',
      total: 1000,
    },
  },
  resources: {
    wheat: {
      id: 'wheat',
      icon: '🌾',
      sourceId: 'wheat',
      buildingId: 'farm',
      total: 0,
      description: 'Current wheat / Total available',
    },
    person: {
      id: 'person',
      icon: '🧍🏼‍♂️',
      buildingId: 'city',
      total: 0,
      description: 'Current population',
    },
  },
};

const state = {
  buildings: [],
  sources: [],
  resources: [],
  player: {},
  units: {},
  events: {},
};

export default state;
