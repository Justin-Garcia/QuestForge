const router = require('express').Router();
const { Tasks } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTask = await Tasks.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTask);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const tasksData = await tasks.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!tasksData) {
      res.status(404).json({ message: 'No task found with this id!' });
      return;
    }

    res.status(200).json(tasksData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
