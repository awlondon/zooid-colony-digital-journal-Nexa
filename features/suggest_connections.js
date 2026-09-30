const suggestConnections = (bookInsight, userReflection) => {
  // Algorithm to suggest real-life scenarios and mitigation strategies
  // based on book insights and user reflections
  const scenarios = {
    anchoringEffect: {
      financialDecisionMaking: {
        scenario: "Setting a range of acceptable outcomes in financial negotiations.",
        mitigation: "Consider multiple reference points and adjust expectations accordingly."
      }
    },
    availabilityHeuristic: {
      riskAssessment: {
        scenario: "Reviewing historical data to assess less common but significant risks.",
        mitigation: "Expand the scope of data considered to avoid over-reliance on recent events."
      }
    },
    confirmationBias: {
      negotiations: {
        scenario: "Considering multiple perspectives in negotiations.",
        mitigation: "Seek out and evaluate information that challenges initial assumptions."
      }
    }
  };

  return scenarios[bookInsight][userReflection.scenario];
};

module.exports = suggestConnections;
