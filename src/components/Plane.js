const Plane = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[60, 60]} />
      <meshStandardMaterial color={'#b0e324'} />
    </mesh>
  );
};

export default Plane;
