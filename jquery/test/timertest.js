  const NewTimerModal = require("./new_timer_modal")
  const $ = require('jquery');

  const timeout = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
  };

  $(".timer_modal_trigger").click(() => {
      let problem_id = $(this).data().problem_id
      let timer = new NewTimerModal(problem_id)
  })
  describe("new timer modal test", () => {
      it("should set holy grail id", () => {
          document.body.innerHTML = '<div class="new_timer_modal"><div class="holy_grail"></div><div class="show_problem_one"></div><button class="timer_modal_trigger" data-problem_id="32">click</button></div>'
          $(".new_task_modal").click()
          timeout(1000)
          expect($(".show_problem_one holy_grail").html()).toBe(1)

      })

  })