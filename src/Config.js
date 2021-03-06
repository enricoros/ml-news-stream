const LOGO_FILES = {
  'Qualcomm': 'logo-qualcomm.png',
  // 'Qualcomm Ventures': 'logo-qualcomm-ventures.png',
  'Amazon': 'logo-amazon.png',
  'Apple': 'logo-apple.png',
  'Google': 'logo-google.png',
  'Google DeepMind': 'logo-google-deepmind.png',
  'Intel': 'logo-intel-nervana.png',
  'Medium': 'logo-medium.png',
  'Microsoft': 'logo-microsoft.png',
  'Facebook': 'logo-facebook.png',
  'NVIDIA': 'logo-nvidia.png',
  // 'CEVA': 'logo-ceva.png',
  'OpenAI': 'logo-openai.png',
  'Two Minute Papers': 'logo-misc-two-minute-papers.png',
  'Otoro': 'logo-misc-otoro.png',
  'Newsletter': 'logo-misc-newsletter.png',
};

const FEEDS = [
  // {
  //   id: 'q1',
  //   company: 'Qualcomm',
  //   name: 'Qualcomm Developer Network Blogs',
  //   url: 'https://developer.qualcomm.com/rssfeed',
  //   home: 'https://developer.qualcomm.com/blogs'
  // },
  // {
  //   id: 'q2',
  //   company: 'Medium',
  //   name: 'Qualcomm Ventures',
  //   url: 'https://medium.com/feed/qualcomm-ventures',
  //   home: 'https://medium.com/qualcomm-ventures'
  // },
  // {
  //   id: 'q3',
  //   company: 'Qualcomm',
  //   name: 'Qualcomm Life',
  //   url: 'http://www.qualcommlife.com/blog/feed/rss/our-blog?format=feed',
  //   home: 'http://www.qualcommlife.com/blog'
  // },
  // {
  //   id: 'q4',
  //   company: 'Qualcomm',
  //   name: 'Qualcomm SEC Filings',
  //   url: 'http://apps.shareholder.com/rss/rss.aspx?channels=682&companyid=QCOM'
  // },
  {
    id: 'am',
    company: 'Amazon',
    name: 'Amazon AI Blog',
    url: 'https://aws.amazon.com/blogs/ai/feed/',
    home: 'https://aws.amazon.com/blogs/ai/'
  },
  {
    disabled: true,
    id: 'aa',
    company: 'Apple',
    name: 'Apple Machine Learning Journal',
    url: 'https://machinelearning.apple.com/feed.xml',
    home: 'https://machinelearning.apple.com/'
  },
  {
    id: 'g1',
    company: 'Google',
    comments: 'Brain, NO Magenta, etc.',
    name: 'Google Research Blog',
    // url: 'https://www.blogger.com/feeds/21224994/posts/default',
    url: 'https://www.blogger.com/feeds/21224994/posts/default/-/Machine%20Learning',
    home: 'https://research.googleblog.com/'
  },
  {
    id: 'g2',
    company: 'Google DeepMind',
    name: 'Deep Mind Blog',
    url: 'https://deepmind.com/blog/feed/basic/',
    home: 'https://deepmind.com/blog/'
  },
  {
    id: 'g3',
    company: 'Google',
    name: 'Magenta',
    url: 'https://magenta.tensorflow.org/feed.xml',
    home: 'https://magenta.tensorflow.org/blog/'
  },
  {
    id: 'g4',
    company: 'Google',
    name: 'Google AI Technology Blog',
    url: 'https://www.blog.google/technology/ai/rss',
    home: 'https://www.blog.google/technology/ai/'
  },
  {
    id: 'g5',
    company: 'Google',
    name: 'Google AI Blog',
    url: 'https://www.blogger.com/feeds/8474926331452026626/posts/default',
    home: 'https://ai.googleblog.com'
  },
  {
    disabled: true,
    id: 'ii',
    company: 'Intel',
    name: 'Intel Nervana Blog',
    url: 'https://www.intelnervana.com/feed/',
    home: 'https://www.intelnervana.com/blog/'
  },
  {
    id: 'mm',
    company: 'Microsoft',
    name: 'Microsoft Next',
    url: 'https://blogs.microsoft.com/ai/feed/',
    home: 'https://blogs.microsoft.com/ai/'
  },
  {
    disabled: true, /* FB has the FB AI blog + PyTorch blog - both miss feeds */
    id: 'ff',
    company: 'Facebook',
    name: 'Caffe2 Blog',
    url: 'https://caffe2.ai/feed.xml',
    home: 'https://caffe2.ai/blog/'
  },
  {
    id: 'nn',
    company: 'NVIDIA',
    name: 'NVIDIA Deep Learning',
    url: 'https://blogs.nvidia.com/blog/category/deep-learning/feed/',
    home: 'https://blogs.nvidia.com/blog/category/deep-learning/'
  },
  {
    disabled: true,
    id: 'cc',
    company: 'CEVA',
    name: 'CEVA Experts Blog',
    url: 'https://www.ceva-dsp.com/ourblog/feed/',
    home: 'http://www.ceva-dsp.com/ourblog/'
  },
  {
    id: 'oa',
    company: 'OpenAI',
    name: 'OpenAI Blog',
    url: 'https://blog.openai.com/rss/',
    home: 'https://blog.openai.com/'
  },
  {
    id: 'ain',
    company: 'Medium',
    name: 'AI Now Institute',
    url: 'https://medium.com/feed/@AINowInstitute',
    home: 'https://medium.com/@AINowInstitute'
  },
  {
    id: 'bpw',
    company: 'Medium',
    name: 'Pete Warden\'s blog',
    url: 'https://petewarden.com/feed/',
    home: 'https://petewarden.com',
    title_prefix: 'Pete Warden:'
  },
  {
    id: 'bak',
    company: 'Medium',
    name: 'Andrej Karpathy',
    url: 'https://medium.com/feed/@karpathy',
    home: 'https://medium.com/@karpathy',
    title_prefix: 'Andrej Karpathy:'
  },
  {
    id: 'bds',
    company: 'Medium',
    name: 'Distill',
    url: 'https://distill.pub/rss.xml',
    home: 'https://distill.pub',
    title_prefix: 'Distill:'
  },

  {
    disabled: false,
    id: 'tmp',
    company: 'Two Minute Papers',
    name: 'Two Minute Papers',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCbfYPyITQ-7l4upoX8nvctg',
    home: 'https://www.youtube.com/channel/UCbfYPyITQ-7l4upoX8nvctg',
    title_prefix: '(learn something)'
  },
  {
    id: 'oto',
    company: 'Otoro',
    name: 'Otoro Blog',
    url: 'http://blog.otoro.net/feed.xml',
    home: 'http://blog.otoro.net/',
    title_prefix: '(ml & design)'
  },
  {
    id: 'iai',
    company: 'Newsletter',
    name: 'Import AI Newsletter',
    url: 'https://jack-clark.net/feed/',
    home: 'https://jack-clark.net/import-ai/',
    title_prefix: '(AI newsletter)'
  },
  {
    id: 'dh',
    company: 'Newsletter',
    name: 'Deep Hunt Newsletter',
    url: 'https://deephunt.in/feed/',
    home: 'https://deephunt.in/',
    title_prefix: '(AI newsletter)'
  }
];

// const LINKS = [
//   'https://www.eff.org/ai/metrics', 'http://aiweekly.co/
// ];

export {FEEDS, LOGO_FILES};
