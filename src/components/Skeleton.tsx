interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
    return (
      <div className="animate-pulse">
        <div className={`bg-[#263742] rounded-md ${className}`}></div>
      </div>
    )
  }
  
  export default Skeleton