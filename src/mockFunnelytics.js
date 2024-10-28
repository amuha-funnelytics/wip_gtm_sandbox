export default {
  funnelytics: {
    events: {
      trigger: (name, data) => {
        console.log(`Calling window.funnelytics.events.trigger for the step: ${window.funnelytics.step}`);
        console.log(`${name}:   `, JSON.stringify(data, null, 2));
      },
    },
    step: 1234566778,
  }
};