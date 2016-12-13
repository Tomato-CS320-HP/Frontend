$(document).ready(function(){
    console.log('Page has fully loaded')

    var values_to_load = {
      'large': [
        {
          'label': 'by Product Type',
          'id': 'product-type'
        },
        {
          'label': 'by Company',
          'id': 'company'
        },
        {
          'label': 'by Serial Number',
          'id': 'serial-number'
        }
      ],
      'statistical': [
        {
          'label': 'Read Speed',
          'id': 'read-speed'
        },
        {
          'label': 'Read Count',
          'id': 'read-count'
        },
        {
          'label': 'Write Speed',
          'id': 'write-count'
        },
        {
          'label': 'Write Count',
          'id': 'write-count'
        },
        {
          'label': 'Bandwidth',
          'id': 'bandwidth'
        },
        {
          'label': 'CPU',
          'id': 'cpu'
        }
      ]
    }

    var item;
    for(item in values_to_load.large) {
      var relevant = values_to_load.large[item];
      var s = "<li class='metric overall-metric' id='"+relevant.id+"'><a href='#'>"+relevant.label+"</a></li>";
      $('#large-metrics').append(s);
    }

    for(item in values_to_load.statistical) {
      var relevant = values_to_load.statistical[item];
      var s = "<li class='performance-metric overall-metric' id='"+relevant.id+"'><a href='#'>"+relevant.label+"</a></li>";
      $('#statistical-metrics #statistical-sublist').append(s);
    }

    $('.overall-metric a').on("click", function() {
      console.log('Metric button clicked')
      var $actual = $(this).parent()

      if($actual.hasClass('active-metric')) {
        $actual.removeClass('active-metric')
      }
      else if($actual.hasClass('metric')) {
        console.log('Top metric selected')
        $('.overall-metric.active-metric').removeClass('active-metric')
        $actual.addClass('active-metric')
      }
      else if($actual.hasClass('performance-metric')) {
        $('.metric.active-metric').removeClass('active-metric')
        $actual.addClass('active-metric')
      }

      updateContent()
    });
});



function updateContent() {
  /*
    Logic for AJAX calls and the like to update the center
    panel of the page would go here
  */
}
