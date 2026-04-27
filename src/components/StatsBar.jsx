import { useInView } from '../hooks/useInView'
import './StatsBar.css'

const stats = [
  { value: '7', suffix: '', label: 'African Countries' },
  { value: '5', suffix: '+', label: 'Years Active' },
  { value: '280K', suffix: ' MT', label: 'Cashew Exported (2024)' },
  { value: '100', suffix: '%', label: 'AfCFTA Compliant' },
]

function StatsBar() {
  const [ref, inView] = useInView()
  return (
    <div className="statsbar" ref={ref}>
      <div className="statsbar-container">
        {stats.map((s, i) => (
          <div key={i} className={`statsbar-item anim-fade-up${inView ? ' in-view' : ''} delay-${i + 1}`}>
            <span className="statsbar-value">{s.value}<span className="statsbar-suffix">{s.suffix}</span></span>
            <span className="statsbar-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsBar
