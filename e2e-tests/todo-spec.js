describe('Add a task', function() {
  it('should add a task', function() {
    browser.get('http://localhost:8000/#!/view1');
    var modal=element(by.id('myModal'));
    element(by.id('openAddTaskButton')).click().then(function() {
      expect(modal.isDisplayed()).toBeFalsy();
      browser.sleep(5000);
      element(by.id('taskName')).sendKeys('Add some task with automated test');
      element(by.id('dueDate')).sendKeys('12/05/2018');
      browser.sleep(5000);
      element(by.id('addNewTaskButton')).click();
        });
    });
});

describe('Search a task', function() {
  it('should update a task', function() {
    browser.get('http://localhost:8000/#!/view1');
    element(by.id('searchTask')).sendKeys('Add some task with automated test');
    buttonSearchTask= element(by.id('buttonSearchTask'));
      buttonSearchTask.click().then(function() { //Add some task with automated test

        });
    });
});