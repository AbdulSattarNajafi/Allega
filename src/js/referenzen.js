(function multipleSelecet() {
  let $ = require('jquery');

  Array.prototype.search = function (elem) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] == elem) return i;
    }

    return -1;
  };

  let Multiselect = function (selector) {
    if (!$(selector)) {
      console.error('ERROR: Element %s does not exist.', selector);
      return;
    }

    this.selector = selector;
    this.selections = [];

    (function (that) {
      that.events();
    })(this);
  };

  Multiselect.prototype = {
    open: function (that) {
      let target = $(that).parent().attr('data-target');

      // If we are not keeping track of this one's entries, then
      // start doing so.
      if (!this.selections) {
        this.selections = [];
      }

      $(this.selector + '.multiselect').toggleClass('active');
    },

    close: function () {
      $(this.selector + '.multiselect').removeClass('active');
    },

    events: function () {
      let that = this;

      $(document).on(
        'click',
        that.selector + '.multiselect > .multiselect__title',
        function (e) {
          if (e.target.className.indexOf('multiselect__title-close') < 0) {
            that.open();
          }
        }
      );

      $(document).on(
        'click',
        that.selector + '.multiselect option',
        function (e) {
          let selection = $(this).attr('value');
          let target = $(this).parent().parent().attr('data-target');

          let io = that.selections.search(selection);

          if (io < 0) that.selections.push(selection);
          else that.selections.splice(io, 1);

          that.selectionStatus();
          that.setSelectionsString();
        }
      );

      $(document).on(
        'click',
        that.selector +
          '.multiselect > .multiselect__title > .multiselect__title-close',
        function (e) {
          that.clearSelections();
        }
      );

      $(document).click(function (e) {
        if (e.target.className.indexOf('title') < 0) {
          if (e.target.className.indexOf('text') < 0) {
            if (e.target.className.indexOf('-icon') < 0) {
              if (
                e.target.className.indexOf('selected') < 0 ||
                e.target.localName != 'option'
              ) {
                that.close();
              }
            }
          }
        }
      });
    },

    selectionStatus: function () {
      let obj = $(this.selector + '.multiselect');

      if (this.selections.length) obj.addClass('selection');
      else obj.removeClass('selection');
    },

    clearSelections: function () {
      this.selections = [];
      this.selectionStatus();
      this.setSelectionsString();
    },

    getSelections: function () {
      return this.selections;
    },

    setSelectionsString: function () {
      let selects = this.getSelectionsString().split(', ');
      $(this.selector + '.multiselect > .multiselect__title').attr(
        'title',
        selects
      );

      let opts = $(this.selector + '.multiselect option');

      if (selects.length > 6) {
        let _selects = this.getSelectionsString().split(', ');
        _selects = _selects.splice(0, 6);
        $(this.selector + '.multiselect > .title > .text').text(
          _selects + ' [...]'
        );
      } else {
        $(
          this.selector +
            '.multiselect > .multiselect__title > .multiselect__title-text'
        ).text(selects);
      }

      for (let i = 0; i < opts.length; i++) {
        $(opts[i]).removeClass('selected');
      }

      for (let j = 0; j < selects.length; j++) {
        let select = selects[j];

        for (let i = 0; i < opts.length; i++) {
          if ($(opts[i]).attr('value') == select) {
            $(opts[i]).addClass('selected');
            break;
          }
        }
      }
    },

    getSelectionsString: function () {
      if (this.selections.length > 0) return this.selections.join(', ');
      else return 'Select';
    },

    setSelections: function (arr) {
      if (!arr[0]) {
        error('ERROR: This does not look like an array.');
        return;
      }

      this.selections = arr;
      this.selectionStatus();
      this.setSelectionsString();
    },
  };

  $(document).ready(function () {
    const bereichSelect = new Multiselect('#bereich');
    const gebaudeartSelect = new Multiselect('#gebaudeart');
    const produktSelect = new Multiselect('#produkt');
  });
})();
