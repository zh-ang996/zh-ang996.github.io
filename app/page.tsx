import Image from 'next/image';

type Media = {
  kind: 'video' | 'image';
  label: string;
  caption: string;
  src?: string;
  poster?: string;
};

type Project = {
  type: string;
  period: string;
  title: string;
  bullets: string[];
  tags: string[];
  media: Media[];
};

const projects: Project[] = [
  {
    type: '宇泛智能 / 灵猫四足机器人',
    period: '算法实习项目',
    title: '基于 SWAP 镜像等变世界模型的 Uniubi“灵猫”四足机器人极限地形跑酷',
    bullets: [
      '将 RSSM 世界模型与左右镜像等变策略一体化，完成公司自研 Uniubi“灵猫”机器人适配、AMP 数据重采集；sim2sim 到 MuJoCo 中稳定越过约 1.4 m 沟壑并登上 0.6 m 箱体。',
      '设计左右镜像等变网络，对本体状态、关节动作、运动指令及深度地形观测执行带符号置换与水平翻转，构建等变 RSSM、等变 Actor 和镜像不变 Critic，保证策略在左右反射下保持物理一致性。',
      '构建 PPO-RSSM-AMP 联合训练框架：PPO 优化跑酷策略，RSSM 学习环境动态表征，AMP 引入专家运动先验；采用低开销 RayCasterCamera 获取深度观测，并建模真实深度相机缺陷，以 10 Hz 更新世界模型、50 Hz 输出控制动作。',
    ],
    tags: ['RSSM', 'SWAP / Equivariance', 'PPO', 'AMP', 'MuJoCo'],
    media: [
      {
        kind: 'video',
        label: '20 cm 台阶 / 1.4 m 沟壑',
        caption: 'SWAP · stair + gap',
        src: '/media/videos/1、SWAP_20cm-stair-140cm-gap.mp4',
      },
      {
        kind: 'video',
        label: '高箱体 / 沟壑',
        caption: 'SWAP · box + gap',
        src: '/media/videos/1、SWAP_box-higher_gap.mp4',
      },
      {
        kind: 'video',
        label: '实物测试',
        caption: 'SWAP · real robot',
        src: '/media/videos/1、SWAP_box_real.mp4',
      },
    ],
  },
  {
    type: '宇泛智能 / 灵猫四足机器人',
    period: '算法实习项目',
    title: '基于视觉感知的 Uniubi“灵猫”四足机器人极限地形跑酷两阶段训练框架',
    bullets: [
      '面向沟壑、台阶/高台及粗糙地形，基于 Isaac Gym 构建“特权地形高度扫描教师策略—深度视觉学生策略”两阶段训练框架，并完成 Sim2Sim 迁移至 MuJoCo 验证；学生策略仅依赖本体观测和深度图，成功通过约 0.7 m 沟壑及 0.3 m 高台。',
      '第一阶段基于 PPO 与 RMA 训练教师策略：利用 10 帧历史本体观测监督训练 7D Estimator，预测基座线速度和四足接触概率并输入 actor 网络中，critic 接受全部特权信息与域随机信息。',
      '第二阶段冻结教师 actor、Estimator 及 RMA Encoder，通过地形潜变量对齐、动作模仿和有效航向预测损失蒸馏 CNN-GRU 深度编码器。',
    ],
    tags: ['Isaac Gym', 'PPO', 'RMA', 'CNN-GRU', '深度视觉'],
    media: [
      {
        kind: 'video',
        label: '沟壑',
        caption: 'Vision · gap',
        src: '/media/videos/2、extreme_parkour_gap.mp4',
      },
      {
        kind: 'video',
        label: '障碍跨越',
        caption: 'Vision · hurdle',
        src: '/media/videos/2、extreme_parkour_hurdle.mp4',
      },
      {
        kind: 'video',
        label: '台阶',
        caption: 'Vision · step',
        src: '/media/videos/2、extreme_parkour_step.mp4',
      },
    ],
  },
  {
    type: '独立完成',
    period: '2025.06 - 2026.01',
    title: '四足机器人高动态安全控制框架',
    bullets: [
      '基于一阶泰勒展开与悲观约束估计方法，解决现有 safe RL 方法在处理极端约束（如关节力矩、位置超限）时因梯度奇异性导致训练崩溃的问题，增强四足机器人训练时对约束边界的敏感性。',
      '基于 CMDP 引入内点法约束优化，提出 Taylor-expanded log barrier 约束函数，缓解传统 IPO 在约束边界处的梯度爆炸问题，并结合 PPO clipped surrogate 提升训练稳定性；结合 AMP，解决低趴、关节抖动、高步频等错误步态。',
      '在模拟硬件退化的极端实验中（所有关节力矩限制 7 Nm 以下、姿态角波动控制在 ±2° 内），约束违规率显著低于常规 IPO 与 PPO-Lagrangian 方法，成功部署在 Unitree Go1 机器人上；并撰写发明专利一篇，论文在投。',
    ],
    tags: ['Safe RL', 'CMDP', 'Taylor-IPO', 'PPO', 'AMP'],
    media: [
      {
        kind: 'video',
        label: 'Taylor-IPO',
        caption: 'Safe RL · Unitree Go1',
        src: '/media/videos/4、Taylor-IPO.mp4',
      },
    ],
  },
  {
    type: '独立完成',
    period: '2026.03 - 2026.05',
    title: '基于并行教师-学生网络蒸馏与多专家网络的盲行策略',
    bullets: [
      '面向四足机器人在粗糙地形中盲走速度跟踪任务，在训练阶段利用仿真特权信息，基于 MoE-CTS 并行教师-学生框架，利用 Teacher 特权观测对 Student 网络进行实时蒸馏，最终 Student 策略仅依赖现实中可获得的历史本体观测完成 sim2real 部署控制。',
      '基于 Isaac Lab / rsl_rl 搭建训练环境，Teacher Encoder 额外使用本体线速度、足端接触力状态和高程图等特权信息并编码成 32 维向量；Student Encoder 使用 MoE 网络结构，输入 5 帧历史本体信息，同样输出 32 维向量，通过 75% teacher / 25% student 的 rollout 机制进行 CTS 蒸馏。',
      '在 Isaac Lab 中完成仿真验证，并成功完成 sim2real 部署；实物机器人可在真实台阶场景中实现上下楼梯运动，验证了盲行策略的鲁棒性与迁移能力。',
    ],
    tags: ['MoE-CTS', 'Teacher-Student', 'Isaac Lab', 'rsl_rl', 'Sim2Real'],
    media: [
      {
        kind: 'video',
        label: 'MOE-CTS Stair',
        caption: 'Blind walking · stairs',
        src: '/media/videos/3、MOE-CTS Stair.mp4',
      },
    ],
  },
];

const news = [
  { label: '2026.06 - 至今', text: '宇泛智能科技股份有限公司（灵猫四足机器人），算法实习生。' },
  { label: '2026.03 - 2026.05', text: '独立完成并行教师-学生网络蒸馏与多专家网络盲行策略。' },
  { label: '2025.06 - 2026.01', text: '独立完成四足机器人高动态安全控制框架。' },
  { label: '成果', text: '发明专利一篇；论文《Taylor-IPO Safe Reinforcement Learning for Quadrupedal Locomotion via Taylor-Expanded Barrier Optimization》在投。' },
];

const education = [
  { school: '华南理工大学（985）', degree: '电子信息 · 硕士', period: '2024.09 - 至今' },
  { school: '华南师范大学（211）', degree: '电子信息科学与技术 · 本科', period: '2020.09 - 2024.06' },
];

const internships = [
  { company: '宇泛智能科技股份有限公司（灵猫四足机器人）', role: '算法实习生', period: '2026.06 - 至今' },
  { company: '轮趣科技（东莞）有限公司', role: 'ROS 机器人助理工程师', period: '2024.05 - 2024.09' },
  { company: '城市之光无人驾驶公司', role: '软件支持实习生', period: '2023.10 - 2024.01' },
];

function MediaFrame({ media }: { media: Media }) {
  if (media.src && media.kind === 'video') {
    return (
      <video className="media-asset" controls muted loop playsInline preload="metadata" poster={media.poster}>
        <source src={media.src} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
    );
  }

  if (media.src && media.kind === 'image') {
    return <Image className="media-asset" src={media.src} alt={media.caption} width={960} height={540} unoptimized />;
  }

  return (
    <div className="media-placeholder" aria-label={media.caption}>
      <span className="media-placeholder-type">{media.kind === 'video' ? 'VIDEO' : 'IMAGE'}</span>
      <span className="media-placeholder-play">{media.kind === 'video' ? '▶' : '+'}</span>
      <span className="media-placeholder-label">{media.label}</span>
    </div>
  );
}

function SectionTitle({ children, id }: { children: React.ReactNode; id: string }) {
  return <h2 id={id} className="section-title">{children}</h2>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="academic-shell topbar-inner">
          <a className="home-link" href="#about-me">主页</a>
          <nav aria-label="Main navigation">
            <a href="#about-me">关于我</a>
            <a href="#news">动态</a>
            <a href="#projects">项目经验</a>
            <a href="#education">教育背景</a>
            <a href="#internships">实习经历</a>
            <a href="#skills">专业技能</a>
          </nav>
        </div>
      </header>

      <div className="academic-shell page-layout">
        <aside className="profile-column">
          <Image className="avatar-photo" src="/media/images/avatar.jpg" alt="张俊洋" width={126} height={126} unoptimized />
          <h1>张俊洋</h1>
          <p className="profile-role">男 · 24 岁 · 2027 届毕业生</p>
          <p className="profile-affiliation">机器人算法 / 强化学习 / 运动控制</p>
          <ul className="profile-details">
            <li><span>研究方向</span><span>四足机器人、Safe RL、Sim2Real</span></li>
            <li><span>所在地</span><span>中国</span></li>
            <li><span>电话</span><a href="tel:13232107032">13232107032</a></li>
            <li><span>邮箱</span><a href="mailto:jyangzhang@qq.com">jyangzhang@qq.com</a></li>
          </ul>
        </aside>

        <article className="content-column">
          <section className="content-section" id="about-me">
            <SectionTitle id="about-me-title">关于我</SectionTitle>
            <p>我目前就读于华南理工大学电子信息专业硕士，研究方向为机器人算法、强化学习与运动控制。</p>
            <p>主要关注四足机器人运动控制、视觉与本体感知、Safe RL、Teacher-Student 策略蒸馏以及世界模型，并具备从 Isaac Gym、 Isaac Lab、MuJoCo 到真实机器人部署的训练、调试与工程实践经验。</p>
          </section>

          <section className="content-section" id="news">
            <SectionTitle id="news-title">动态</SectionTitle>
            <ul className="news-list">
              {news.map((item) => <li key={item.label}><strong>{item.label}</strong><span>{item.text}</span></li>)}
            </ul>
          </section>

          <section className="content-section" id="projects">
            <SectionTitle id="projects-title">项目经验</SectionTitle>
            <div className="projects-list">
              {projects.map((project) => (
                <article className="project-row" key={project.title}>
                  <div className={`project-media-gallery project-media-count-${project.media.length}`}>
                    {project.media.map((media) => (
                      <figure className="project-media-item" key={media.src ?? media.label}>
                        <MediaFrame media={media} />
                        <figcaption>{media.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                  <div className="project-copy">
                    <p className="project-type">{project.type}<span> · </span>{project.period}</p>
                    <h3>{project.title}</h3>
                    <ul className="project-bullets">
                      {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                    <p className="project-tags">{project.tags.join(' · ')}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" id="education">
            <SectionTitle id="education-title">教育背景</SectionTitle>
            <ul className="background-list">
              {education.map((item) => <li key={item.school}><strong>{item.school}</strong><span>{item.degree}<em>{item.period}</em></span></li>)}
              <li><strong>荣誉</strong><span>推荐免试研究生；智能车全国一等奖；中国软件杯大赛全国三等奖；校级二等、三等奖学金</span></li>
            </ul>
          </section>

          <section className="content-section" id="internships">
            <SectionTitle id="internships-title">实习经历</SectionTitle>
            <ul className="background-list">
              {internships.map((item) => <li key={item.company}><strong>{item.company} · {item.role}</strong><span>{item.period}</span></li>)}
            </ul>
          </section>

          <section className="content-section" id="skills">
            <SectionTitle id="skills-title">专业技能</SectionTitle>
            <ul className="skills-list">
              <li>熟练掌握 Python、C/C++，熟悉 Linux、ROS、PyTorch、Git，具备机器人算法训练、调试与部署经验。</li>
              <li>熟悉 PPO、Safe RL、AMP、RMA、DAgger，具备 Teacher-Student、特权信息学习、Estimator 状态估计及策略蒸馏实践经验。</li>
              <li>熟悉 CNN、GRU、Transformer、MoE、VAE 和 RSSM 世界模型，掌握时序特征编码、循环隐藏状态管理、prior/posterior 建模、KL 正则化及多模态重建。</li>
              <li>熟悉 Isaac Gym、Isaac Lab、Isaac Sim、MuJoCo、Gazebo 仿真环境，具备奖励函数调参和强化学习环境开发经验。</li>
              <li>具备四足机器人 Sim2Sim、Sim2Real、Jetson Orin / TensorRT 推理部署经验。</li>
            </ul>
          </section>

          <section className="content-section contact-section" id="contact">
            <SectionTitle id="contact-title">联系方式</SectionTitle>
            <p>欢迎交流四足机器人、强化学习、运动控制及相关算法工程机会。</p>
            <p><a className="project-link" href="mailto:jyangzhang@qq.com">jyangzhang@qq.com ↗</a><span className="contact-phone"> · 13232107032</span></p>
          </section>
        </article>
      </div>

      <footer className="site-footer">
        <div className="academic-shell">© 2026 张俊洋 · Built with GitHub Pages</div>
      </footer>
    </main>
  );
}
