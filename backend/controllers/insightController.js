const UserInsight = require('../models/UserInsight');

exports.getUserInsights = async (req, res) => {
  const { userId } = req.params;

  try {
    const insight = await UserInsight.findOne({ userId });
    if (!insight) return res.status(404).json({ message: 'No insights found' });

    res.json(insight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
