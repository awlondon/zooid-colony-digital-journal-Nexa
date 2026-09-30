const createMindMap = (insight, scenario) => {
  // Algorithm to create visual mind maps illustrating complex ideas and their interconnections
  const mindMap = {
    centralNode: insight,
    branches: {
      anchoringEffect: {
        realLifeScenario: "Financial Decision-Making",
        mitigationStrategy: "Setting a Range of Acceptable Outcomes"
      },
      availabilityHeuristic: {
        realLifeScenario: "Risk Assessment",
        mitigationStrategy: "Reviewing Historical Data"
      },
      confirmationBias: {
        realLifeScenario: "Negotiations",
        mitigationStrategy: "Considering Multiple Perspectives"
      }
    }
  };

  return mindMap;
};

module.exports = createMindMap;
