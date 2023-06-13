const { BlogPost } = require('../models');

const blogPostData = [{
    userId: 1,
    title: 'Sample Blog 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lorem sed risus ultricies tristique nulla. Augue mauris augue neque gravida in fermentum. Eros in cursus turpis massa tincidunt. Et sollicitudin ac orci phasellus egestas. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Sed enim ut sem viverra aliquet eget. Eget felis eget nunc lobortis mattis. Viverra vitae congue eu consequat ac. Semper risus in hendrerit gravida rutrum quisque non. Orci sagittis eu volutpat odio facilisis. Facilisis sed odio morbi quis commodo odio. Adipiscing bibendum est ultricies integer quis auctor elit.'
}, {
    userId: 1,
    title: 'Sample Blog 2',
    text: 'Ac turpis egestas sed tempus urna et. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Ullamcorper dignissim cras tincidunt lobortis. Consectetur lorem donec massa sapien faucibus et. Eget magna fermentum iaculis eu. Felis bibendum ut tristique et egestas. Quis eleifend quam adipiscing vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Vel pharetra vel turpis nunc eget lorem dolor sed. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.'
}, {
    userId: 2,
    title: 'Sample Blog 3',
    text: 'Sit amet tellus cras adipiscing enim. Fames ac turpis egestas sed tempus urna. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Adipiscing elit duis tristique sollicitudin. Nibh cras pulvinar mattis nunc sed. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Elementum tempus egestas sed sed risus. Lectus arcu bibendum at varius vel pharetra vel. Neque convallis a cras semper auctor neque vitae. Ultrices in iaculis nunc sed augue lacus viverra. Metus dictum at tempor commodo ullamcorper. Justo nec ultrices dui sapien eget mi proin sed libero. Magnis dis parturient montes nascetur ridiculus. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.'
}, {
    userId: 2,
    title: 'Sample Blog 4',
    text: 'Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Faucibus et molestie ac feugiat sed. Arcu bibendum at varius vel pharetra vel turpis. Sodales neque sodales ut etiam sit amet nisl purus in. Tortor condimentum lacinia quis vel eros donec. Condimentum id venenatis a condimentum. Iaculis eu non diam phasellus vestibulum lorem sed. Turpis tincidunt id aliquet risus feugiat in ante metus. Bibendum at varius vel pharetra vel turpis nunc eget. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Amet consectetur adipiscing elit ut aliquam purus sit amet. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Felis eget velit aliquet sagittis id consectetur purus.'
}, {
    userId: 3,
    title: 'Sample Blog 5',
    text: 'Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Commodo nulla facilisi nullam vehicula ipsum a arcu. Donec massa sapien faucibus et molestie. Non arcu risus quis varius quam quisque id diam vel. Netus et malesuada fames ac turpis egestas. Elementum facilisis leo vel fringilla est ullamcorper eget. Iaculis eu non diam phasellus vestibulum lorem. Sociis natoque penatibus et magnis. Molestie nunc non blandit massa enim nec dui nunc mattis. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.'
}];

module.exports = function() {
    return BlogPost.bulkCreate(blogPostData);
}