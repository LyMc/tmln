import './style.css';

const $app = document.querySelector('#🧩');

const id = {
  building: {
    FARM: 'farm',
  },
  source: {
    WHEAT: 'wheat',
  },
  resource: {
    WHEAT: 'wheat',
  },
};

const state = {
  player: {},
  buildings: [{ id: id.building.FARM, icon: '👩🏼‍🌾', speed: 0.48 }],
  units: {},
  sources: [
    {
      id: id.source.WHEAT,
      icon: '🌾',
      resouce: id.resource.WHEAT,
      total: 10,
    },
  ],
  resources: [
    { id: id.resource.WHEAT, icon: '🌾', source: id.source.WHEAT, total: 0 },
  ],
  events: {},
};

let time = 0;
const render = () => {
  time++;

  const building = state.buildings.find((b) => b.id === id.building.FARM);
  const source = state.sources.find((s) => s.id === id.source.WHEAT);
  const resource = state.resources.find((r) => r.id === id.resource.WHEAT);

  if (resource.total < source.total) {
    resource.total += building.speed;
  }
  if (resource.total > source.total) {
    resource.total = source.total;
  }

  $app.innerHTML = `
    <h1>Timeline</h1>
    <ul>
    <li>🕓 ${time}s</li>
    <li>${building.icon} ${building.speed}${resource.icon}/s</li>
    <li>${source.icon} ${resource.total.toFixed(2)}/${source.total}</li>
    </ul>
  `;
};

setInterval(render, 1000);
