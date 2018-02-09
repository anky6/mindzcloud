var Vimeo = require('vimeo').Vimeo;

exports.upload = function(req,res){
  var client = new Vimeo('51154e93acc1fc74030ddd504f7150e344aa709f', '37KAZmfbT1JGzvsISOF3K/yk8GO9YH7/2Hy0lOZdwD5eVpLEC/5crkh5GOHbBDdX/LVlf14WMbTCY3t9WQv4MwI2uWwHGFb6Gl0LQXct/jhjSERtMJPI32tLWSf3b7jW' , 'fe972adaf375470be9dcb58988ae0034');
  client.upload(
    'C:\Projects\sample.mp4',
    function (uri) {
      console.log('File upload completed. Your Vimeo URI is:', uri)
    },
    function (bytesUploaded, bytesTotal) {
      var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
      console.log(bytesUploaded, bytesTotal, percentage + '%')
    },
    function (error) {
      console.log('Failed because: ' + error)
    }
  )
};
